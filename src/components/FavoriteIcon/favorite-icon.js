import React, { useContext } from 'react';
import Axios from 'axios';

import StateContext from '../../StateContext';
import DispatchContext from '../../DispatchContext';

import favoriteIconStyles from './favorite-icon.module.scss';
const FavoriteIcon = ({ page, id }) => {

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  return (
    <img
      src={
        appState.favorites.includes(id) ? process.env.PUBLIC_URL + '/icons/heart-full.svg' :
          process.env.PUBLIC_URL + '/icons/heart.svg'
      }
      className={
        page === 'single' ? favoriteIconStyles.favoriteheartsingle :
          page === 'browse' ? favoriteIconStyles.favoriteheartbrowse :
            ''
      }
      alt='heart-icon'
      onClick={handleFavorite}
    />
  )

  function handleFavorite() {
    let items;
    let action;
    if (appState.favorites.includes(id)) {
      action = 'removeFavorite';
      items = [...appState.favorites];
      items.splice(items.indexOf(id), 1);
    } else {
      action = 'addFavorite';
      items = [...appState.favorites, id];
    }
    appDispatch({ type: action, item: id });
    postFavorites(items);
  }

  async function postFavorites(items) {
    try {
      await Axios.post(`/saveFavorites`, { items: items });
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  }
}

export default FavoriteIcon