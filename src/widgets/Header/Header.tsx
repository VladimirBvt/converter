import React, {FC} from 'react';
import Logo from '../../shared/Logo/Logo';
import styles from './header.module.scss';
import classNames from 'classnames'
import {NavLink} from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>

        <Logo />

        <h1 className={styles.title}>Рынок валют</h1>
        <nav className={styles.nav}>

          <NavLink to='/' exact
                   activeClassName={styles.navItemActive}
                   className={classNames(styles.navItem)}
          >
            Курсы валют
          </NavLink>

          <NavLink to='/converter'
                   activeClassName={styles.navItemActive}
                   className={classNames(styles.navItem)}
          >
            Конвертер
          </NavLink>

        </nav>
      </div>
    </header>
  );
};

export default Header;
