import React from 'react';

import errorStyles from './error.module.scss';

const Error = () => (
  <div className={errorStyles.error}>
    <img
      src={
        process.env.PUBLIC_URL + '/icons/error.svg'
      }
      className={errorStyles.errorimage}
      alt='error-icon'
    />
    <span>
      We are sorry, there was an error with getting data.
    </span>

  </div>
)

export default Error