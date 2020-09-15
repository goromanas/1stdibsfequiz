import React from 'react';

import columnStyles from './column.module.scss';

const Column = ({ children }) => {
  return (
    <div className={columnStyles.column}>
      {children}
    </div>
  )
}

export default Column