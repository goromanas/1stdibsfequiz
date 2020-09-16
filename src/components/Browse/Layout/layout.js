import React from "react";

import Item from '../Item/item';

import layoutStyles from './layout.module.scss';

const Layout = ({ items, elementRef }) => {
  return (
    <div className={layoutStyles.layout}>
      {items.map(item => (
        <>
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            vertical={item.vertical}
            title={item.title}
          />
        </>
      ))
      }
    </div>
  )
}

export default Layout