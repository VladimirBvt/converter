import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styles from './notFoundPage.module.scss'

const NotFoundPage: FC = () => {
  return (
    <div>
      <span className={styles.message}>This page doesn't exist. Go <Link to="/" className={styles.link}>home.</Link></span>
    </div>
  );
};

export default NotFoundPage;
