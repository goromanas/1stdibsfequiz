import React from 'react';

import buttonsStyles from './buttons.module.scss';

const labels = [
  'Purchase',
  'Make offer'
];

const Buttons = () => (
  <div className={buttonsStyles.buttonswrapper}>
    {labels.map(label => (
      <span
        key={label}
        className={buttonsStyles.buttons}
      >
        {label}
      </span>
    ))}
  </div>
)

export default Buttons