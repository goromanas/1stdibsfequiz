import React from "react";
import { Link } from 'react-router-dom';

import itemStyles from './item.module.scss';

import Image from '../../Image/image';
import FavoriteIcon from "../../FavoriteIcon/favorite-icon";

const Item = ({ id, image, price, vertical, title }) => {
  return (
    <div className={itemStyles.item}>
      <Link to={`/item/${id}`}>
        <Image
          image={image}
          alt={vertical}
          title={title}
        />
      </Link>
      <div className={itemStyles.iteminfo}>
        <span>
          {price}
        </span>
        <FavoriteIcon
          page='browse'
        />
      </div>
    </div>
  )
}

export default Item