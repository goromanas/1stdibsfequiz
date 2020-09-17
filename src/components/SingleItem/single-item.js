import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

import DispatchContext from '../../DispatchContext';

import Layout from './Layout/layout';
import Column from './Column/column';
import Row from './Row/row';
import Loader from '../Loader/loader';
import Image from '../Image/image';
import Buttons from './Buttons/buttons';
import Meta from './Meta/meta';
import Description from './Description/description';
import Navigation from './Navigation/navigation';

import singleItemStyles from './single-item.module.scss';

import FavoriteIcon from '../FavoriteIcon/favorite-icon';


const Item = () => {

  const { id } = useParams();

  const appDispatch = useContext(DispatchContext);

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    const itemRequest = Axios.CancelToken.source();
    async function fetchItem() {
      setLoading(true);
      try {
        const response = await Axios.get(`/item/${id}`, { cancelToken: itemRequest.token });
        setItem(response.data);
        setLoading(false);
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
    fetchItem(itemRequest);
    fetchFavorites(itemRequest);
    return () => {
      itemRequest.cancel();
    }; // eslint-disable-next-line
  }, [id]);
  return (
    <>
      {loading ? <Loader /> : <>
        <h2 className={singleItemStyles.singleItemseller}>
          {item.seller !== undefined ? item.seller.company : ''}
        </h2>
        <Navigation />
        <Layout>
          <Column>
            <Image
              image={item.image}
              alt={item.vertical}
              page='single'
              id={item.id}
            >
              <FavoriteIcon
                id={item.id}
                page='single'
              />
            </Image>
          </Column>
          <Column>
            <Row>
              <Meta
                title={item.title}
                price={item.price}
                measurements={item.measurements}
              />
              <Buttons />
            </Row>
            <Row>
              <Description
                description={item.description}
                creators={item.creators}
              />
            </Row>
          </Column>
        </Layout>
      </>
      }
    </>
  )
}

export default Item