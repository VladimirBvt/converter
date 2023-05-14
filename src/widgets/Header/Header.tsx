import React, {useMemo, useState} from 'react';
import Logo from '../../shared/Logo/Logo';
import styles from './header.module.scss';

const Header = () => {

  interface Tabs {
    tab1: string,
    tab2: string,
  }

  const tabs: Tabs = useMemo(() => ({
    tab1: "ExchangeRates",
    tab2: "Converter",
  }), [])

  const [tab, setTab] = useState(tabs.tab1)

  const handleTabClick = (tabType: string) => {
    setTab(tabType)
  }

  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.title}>Рынок валюты</h1>
      <nav className={styles.nav}>
        <div className={tab === tabs.tab1 ? styles.navItemActive : styles.navItem}
             onClick={() => handleTabClick(tabs.tab1)}
        >
          Курсы валют
        </div>
        <div className={tab === tabs.tab2 ? styles.navItemActive : styles.navItem}
             onClick={() => handleTabClick(tabs.tab2)}
        >
          Конвертер
        </div>
      </nav>
    </header>
  );
};

export default Header;
