import React from "react";
import { Link } from 'react-router-dom';

import itemStyles from './item.module.scss';

const Item = ({ item }) => {
  return (
    <div className={itemStyles.item}>
      <Link to={`/item/${item.id}`}>
        <img src={item.image} />
      </Link>
    </div>
  )
}

export default Item