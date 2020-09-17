import React from 'react';

import favoriteIconStyles from './favorite-icon.module.scss';
const favorite = false;
const FavoriteIcon = ({ page }) => {

  return (
    <img
      src={
        favorite ? process.env.PUBLIC_URL + '/icons/heart-full.svg' :
          favorite === false ? process.env.PUBLIC_URL + '/icons/heart.svg' :
            ''
      }
      className={
        page === 'single' ? favoriteIconStyles.favoriteheartsingle :
          page === 'browse' ? favoriteIconStyles.favoriteheartbrowse :
            ''
      }
      alt='heart-icon'
    />
  )
}

export default FavoriteIcon