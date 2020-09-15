import React from "react";
import { Link } from 'react-router-dom';

import Item from '../Item/item';

import layoutStyles from './layout.module.scss';

const Layout = ({ items, elementRef }) => {
  return (
    <div className={layoutStyles.layout}>
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          image={item.image}
        />
      ))
      }
    </div>
  )
}

export default Layout