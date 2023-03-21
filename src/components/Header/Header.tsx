import React from 'react';
import Logo from '../../img/logo.png';

import styles from './Header.module.scss';


const Header: React.FC = () => {

  return (
    <div className={styles.headerContainer}>
        <div className={styles.logo}>
            <img src={Logo} alt="Logo" width="100%" height="100%" />
        </div>
        <div className={styles.title}>
          <h1>Footballista</h1>
        </div>
    </div>
  );
};

export default Header;