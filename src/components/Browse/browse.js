import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Layout from './Layout/layout'

const Browse = () => {

  const [items, setItems] = useState([]);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(false);

  async function fetchBrowse(browseRequest) {
    setLoading(true);
    try {
      const response = await Axios.get(`/browse`, {
        params: {
          start: start,
          limit: limit,
        }
      }, { cancelToken: browseRequest.token });
      setItems(response.data.items);
      setLoading(false);
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
  }, [start, limit]);


  return (
    <>
      <h1>Browse page</h1>
      <Layout items={items} />
    </>
  )

  function handleLoadMore() {
    setStart(start + 9);
  }
}

export default Browse