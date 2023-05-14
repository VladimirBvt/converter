import React from 'react';
import styles from './logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImg} src="/assets/converter-icon.png" alt="logo converter" />
    </div>
  );
};

export default Logo;
