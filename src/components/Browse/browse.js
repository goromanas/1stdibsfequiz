import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';

import Layout from './Layout/layout'
import Loader from '../Loader/loader'
import LoadMoreButton from './LoadMoreButton/load-more-button'

import browseStyles from './browse.module.scss';

const Browse = () => {

  const [items, setItems] = useState([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataLength, setDataLength] = useState(0);

  const itemList = useRef(null);

  const limit = 9;

  async function fetchBrowse(browseRequest) {
    setLoading(true);
    try {
      const response = await Axios.get(`/browse`, {
        params: {
          start: start,
          limit: limit,
        }
      }, { cancelToken: browseRequest.token });
      setItems([...items, ...response.data.items]);
      setLoading(false);
      if (dataLength == 0) setDataLength(response.data.totalItems);
      console.log(response.data);

    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  }

  useEffect(() => {
    const browseRequest = Axios.CancelToken.source();
    fetchBrowse(browseRequest);
    return () => {
      browseRequest.cancel();
    };
  }, []);

  useEffect(() => {
    const browseRequest = Axios.CancelToken.source();
    fetchBrowse(browseRequest);

    return () => {
      browseRequest.cancel();
    };
  }, [start]);


  return (
    <div className={browseStyles.browse}>
      <h1 className={browseStyles.browsetitle}>
        Browse page
        </h1>
      {loading
        ? <Loader />
        :
        <>
          <Layout
            items={items}
            ref={itemList}
          />
          {start + limit < dataLength
            ?
            <LoadMoreButton
              handleLoadMore={handleLoadMore}
            />
            :
            ''
          }
        </>
      }
    </div>
  )

  function handleLoadMore() {
    setStart(prevStart => prevStart + 9);
  }
}

export default Browse