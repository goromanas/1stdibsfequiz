import React from 'react';

import metaStyles from './meta.module.scss';

const Meta = ({ title, price, measurements }) => (
  <div>
    <h3
      className={metaStyles.metatitle}
    >
      {title}
    </h3>
    <div className={metaStyles.metaprice}>
      {price ? price.amounts.USD : 'Price upon request'}
    </div>
    <div className={metaStyles.metameasurements}>
      {measurements ? measurements.display : ''}
    </div>
  </div>
)
export default Meta