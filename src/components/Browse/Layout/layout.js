import React from "react"
import { Link } from 'react-router-dom';

const Layout = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <div>
          <Link to={`/item/${item.id}`}>
            {item.title}
          </Link>
          <img src={item.image} />
        </div>
      ))
      }
    </>
  )
}

export default Layout