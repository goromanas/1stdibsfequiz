import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';

import DispatchContext from '../../DispatchContext';

import Layout from './Layout/layout'
import Loader from '../Loader/loader'
import LoadMoreButton from './LoadMoreButton/load-more-button'


import browseStyles from './browse.module.scss';

const Browse = () => {

  const appDispatch = useContext(DispatchContext);

  const [items, setItems] = useState([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataLength, setDataLength] = useState(0);

  const limit = 9;

  async function fetchBrowse(browseRequest) {
    setLoading(true);
    try {
      const response = await Axios.get('/browse', {
        params: {
          start: start,
          limit: limit,
        }
      }, { cancelToken: browseRequest.token });
      setItems(prevItems => {
        return [...items, ...response.data.items]
      });
      setLoading(false);
      if (dataLength === 0) setDataLength(response.data.totalItems);

    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  }

  async function fetchFavorites(browseRequest) {
    setLoading(true);
    try {
      const response = await Axios.get(`/favorites`, { cancelToken: browseRequest.token });
      appDispatch({ type: 'setFavorites', data: response.data.items });
      setLoading(false);

    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  }

  useEffect(() => {
    const browseRequest = Axios.CancelToken.source();
    fetchBrowse(browseRequest);
    fetchFavorites(browseRequest);
    return () => {
      browseRequest.cancel();
    };// eslint-disable-next-line
  }, []);

  useEffect(() => {
    const browseRequest = Axios.CancelToken.source();
    fetchBrowse(browseRequest);

    return () => {
      browseRequest.cancel();
    };// eslint-disable-next-line
  }, [start]);


  return (
    <div className={browseStyles.browse}>
      <h1 className={browseStyles.browsetitle}>
        Browse page
        </h1>

      <Layout
        items={items}
      />
      {loading
        ? <Loader />
        : ''
      }
      {start + limit < dataLength
        ?
        <LoadMoreButton
          handleLoadMore={handleLoadMore}
        />
        :
        ''
      }
    </div>
  )

  function handleLoadMore() {
    setStart(prevStart => prevStart + 9);
  }
}

export default Browse