import React from 'react';

import rowStyles from './row.module.scss';

const Row = ({ children }) => {
  return (
    <div className={rowStyles.row}>
      {children}
    </div>
  )
}

export default Row