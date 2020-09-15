import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

import Layout from './Layout/layout';
import Column from './Column/column';
import Row from './Row/row';

const Item = () => {

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  async function fetchItem(itemRequest) {
    setLoading(true);
    try {
      const response = await Axios.get(`/item/${id}`, { cancelToken: itemRequest.token });
      setLoading(false);
      setItem(response.data);
      console.log(response.data);
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  }

  useEffect(() => {
    const browseRequest = Axios.CancelToken.source();
    fetchItem(browseRequest);
    return () => {
      browseRequest.cancel();
    };
  }, []);
  return (
    <>
      <h2>{item.title}</h2>
      <Layout>
        <Column>
          <img src={item.image} />
        </Column>
        <Column>
          <Row>
            {item.title}
          </Row>
          <Row>
            <span>
              {item.description}
            </span>
            <p>
              Creator:
              <span>
                {item.creators}
              </span>
            </p>
          </Row>
        </Column>
      </Layout>
    </>
  )
}

export default Item