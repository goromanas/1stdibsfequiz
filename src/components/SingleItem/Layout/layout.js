import React from 'react';

import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.layout}>
      {children}
    </div>
  )
}

export default Layout