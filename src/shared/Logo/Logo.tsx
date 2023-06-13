import React, {FC} from 'react';
import styles from './logo.module.scss'
import {Link} from 'react-router-dom';

const Logo: FC = () => {
  return (
    <Link to='/' className={styles.logo}>
      <img className={styles.logoImg} src="/assets/converter-icon.png" alt="logo converter" />
    </Link>
  );
};

export default Logo;
