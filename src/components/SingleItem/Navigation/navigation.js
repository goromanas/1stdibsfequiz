import React from 'react';
import { Link } from "react-router-dom";

import navigationStyles from './navigation.module.scss';

const Navigation = () => (

  <div className={navigationStyles.navigation}>
    <Link to={'/'}>
      <span className={navigationStyles.navigationbackicon}>
        &#8249;
      </span>
    </Link>
    <Link to={'/'}>
      <span className={navigationStyles.navigationbacktext}>
        Home
      </span>
    </Link>

  </div>
)

export default Navigation