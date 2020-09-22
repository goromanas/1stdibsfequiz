import React, { useEffect } from 'react';
import Axios from 'axios';
import { useImmerReducer } from "use-immer";

import Layout from './Layout/layout'
import Loader from '../Loader/loader'
import LoadMoreButton from './LoadMoreButton/load-more-button'
import Error from '../Error/error';


import browseStyles from './browse.module.scss';


const Browse = () => {


  const initialState = {
    items: [],
    start: 0,
    loading: false,
    dataLength: 0,
    error: false,
  };

  function browseReducer(draft, action) {
    switch (action.type) {
      case 'setLoading':
        draft.loading = action.value;
        return;
      case 'setItems':
        draft.items = [...draft.items, ...action.data];
        return;
      case 'setDataLength':
        draft.dataLength = action.data;
        return;
      case 'setStart':
        draft.start = draft.start + action.data;
        return;
      case 'setError':
        draft.error = action.data;
        return;
      default: break;

    }
  }

  const [state, dispatch] = useImmerReducer(browseReducer, initialState);

  const limit = 9;

  async function fetchBrowse(browseRequest) {
    dispatch({ type: 'setLoading', value: true });
    try {
      const response = await Axios.get('/browse', {
        params: {
          start: state.start,
          limit: limit,
        }
      }, { cancelToken: browseRequest.token });
      dispatch({ type: 'setItems', data: response.data.items });
      dispatch({ type: 'setLoading', value: false });
      if (state.dataLength === 0) dispatch({ type: 'setDataLength', data: response.data.totalItems });

    } catch (e) {
      dispatch({ type: 'setError', data: true });
      dispatch({ type: 'setLoading', value: false });
    }
  }

  useEffect(() => {
    const browseRequest = Axios.CancelToken.source();
    fetchBrowse(browseRequest);
    return () => {
      browseRequest.cancel();
    };// eslint-disable-next-line
  }, [state.start]);


  return (
    <div className={browseStyles.browse}>
      <h1 className={browseStyles.browsetitle}>
        Browse page
        </h1>

      <Layout
        items={state.items}
      />
      {state.loading
        ? <Loader />
        : ''
      }
      {state.error
        ? <Error />
        : ''}
      {state.start + limit < state.dataLength
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
    dispatch({ type: 'setStart', data: 9 });
  }
}

export default Browse