import React, {FC} from 'react';
import Header from '../widgets/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExchangeRatesPage from '../pages/ExchangeRatesPage/ExchangeRatesPage';
import ConverterPage from '../pages/ConverterPage/ConverterPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import styles from './styles/App.module.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />

        <Switch>
          <Route path='/' component={ExchangeRatesPage} exact />
          <Route path='/converter' component={ConverterPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
