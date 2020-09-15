import React from "react";
import { Link } from 'react-router-dom';

import itemStyles from './item.module.scss';

const Item = ({ id, image, price }) => {
  return (
    <div className={itemStyles.item}>
      <Link to={`/item/${id}`}>
        <img src={image} />
      </Link>
      <span>
        {price}
      </span>
    </div>
  )
}

export default Item