import React, { useContext } from 'react';

import StateContext from '../../StateContext';
import DispatchContext from '../../DispatchContext';

import favoriteIconStyles from './favorite-icon.module.scss';
const favorite = false;
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
    if (appState.favorites.includes(id)) {
      appDispatch({ type: 'removeFavorite', item: id });

    } else {
      appDispatch({ type: 'addFavorite', item: id });
    }
  }
}

export default FavoriteIcon