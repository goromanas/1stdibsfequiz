import React from 'react';
import ReactTooltip from 'react-tooltip';

import imageStyles from './image.module.scss';

const Image = ({ image, alt, title }) => (
  <div className={imageStyles.imagewrapper}>
    <img
      src={image}
      className={imageStyles.image}
      alt={alt}
      data-tip={title}
    />
    <ReactTooltip />
  </div>
)

export default Image