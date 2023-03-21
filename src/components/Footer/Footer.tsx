import React from 'react';
import Logo from '../../img/logo.png';

import styles from './Footer.module.scss';


const Footer: React.FC = () => {

  return (
    <div className={styles.footerContainer}>
        <div className={styles.logo}>
            <img src={Logo} alt="Logo" width="100%" height="100%" />
        </div>
    </div>
  );
};

export default Footer;