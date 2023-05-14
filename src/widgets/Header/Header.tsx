import React, {FC, useMemo, useState} from 'react';
import Logo from '../../shared/Logo/Logo';
import styles from './header.module.scss';
import classNames from 'classnames'
import {Link, NavLink} from 'react-router-dom';

const Header: FC = () => {

  return (
    <header className={styles.header}>
      <Logo/>
      <h1 className={styles.title}>Рынок валюты</h1>
      <nav className={styles.nav}>
        <NavLink to='/' exact
                 activeClassName={styles.navItemActive}
              className={classNames(styles.navItem)}
              // onClick={() => handleTabClick(tabs.tab1)}
        >
          Курсы валют
        </NavLink>

        <NavLink to='/converter'
                 activeClassName={styles.navItemActive}
              className={classNames(styles.navItem)}
              // onClick={() => handleTabClick(tabs.tab2)}
        >
          Конвертер
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
