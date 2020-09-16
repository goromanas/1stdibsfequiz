import React from "react";
import { Link } from 'react-router-dom';

import itemStyles from './item.module.scss';

import Image from '../../Image/image';

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
      <span>
        {price}
      </span>
    </div>
  )
}

export default Item