import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Axios from 'axios';

import Layout from './Layout/layout';
import Column from './Column/column';
import Row from './Row/row';
import Loader from '../Loader/loader';

const Item = () => {

  const { id } = useParams();

  const initialState = {
    seller: {
      company: ''
    }
  }

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});

  async function fetchItem(itemRequest) {
    setLoading(true);
    setItem(initialState);
    try {
      const response = await Axios.get(`/item/${id}`, { cancelToken: itemRequest.token });
      setItem(response.data);
      setLoading(false);
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
      {loading ? <Loader /> : <>
        <Link to={'/'}>
          <span>&#8249; Home</span>
        </Link>
        <h2>{item.seller !== undefined ? item.seller.company : ''}</h2>
        <Layout>
          <Column>
            <img src={item.image} />
          </Column>
          <Column>
            <Row>
              <h3>{item.title}</h3>
              {/* <span>{item.measurements.display}</span> */}
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
      }
    </>
  )
}

export default Item