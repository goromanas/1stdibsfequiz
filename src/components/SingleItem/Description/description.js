import React from 'react';

import descriptionStyles from './description.module.scss';

const Description = ({ description, creators }) => (
  <div>
    <span>
      {description}
    </span>
    {creators
      ? <div className={descriptionStyles.descriptioncreator}>
        Creator:
                   <span className={descriptionStyles.descriptionauthor}>
          {' '}
          {creators}
        </span>
      </div>
      : ''
    }
  </div>
)

export default Description