import React from 'react';
import ReactTooltip from 'react-tooltip';

import imageStyles from './image.module.scss';

const Image = ({ image, alt, title, children }) => {
  return (
    <div className={imageStyles.imagewrapper}>
      <img
        src={image}
        className={imageStyles.image}
        alt={alt}
        data-tip={title}
      />
      <ReactTooltip />
      {children}
    </div>
  )

}

export default Image