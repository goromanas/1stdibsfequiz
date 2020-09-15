import React from "react";
import { Link } from 'react-router-dom';

import Item from '../Item/item';

import layoutStyles from './layout.module.scss';

const Layout = ({ items }) => {
  return (
    <div className={layoutStyles.layout}>
      {items.map(item => (
        <Item
          item={item}
        />
      ))
      }
    </div>
  )
}

export default Layout