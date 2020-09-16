import React from 'react';
import ReactTooltip from 'react-tooltip';

import imageStyles from './image.module.scss';

const Image = ({ image, alt, title, page }) => (
  <div className={imageStyles.imagewrapper}>
    <img
      src={image}
      className={imageStyles.image}
      alt={alt}
      data-tip={title}
    />
    <ReactTooltip />
    <img
      src={process.env.PUBLIC_URL + '/icons/heart.svg'}
      className={
        page === 'single' ? imageStyles.imageheartsingle :
          page === 'browse' ? imageStyles.imageheartbrowse :
            ''
      }
      alt='heart-icon'
    />
  </div>
)

export default Image