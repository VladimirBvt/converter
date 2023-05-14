import React, {FC} from 'react';
import Header from './widgets/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExchangeRatesPage from './pages/ExchangeRatesPage/ExchangeRatesPage';
import ConverterPage from './pages/ConverterPage/ConverterPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path='/' component={ExchangeRatesPage} exact />
          {/*<Route path='/' exact>*/}
          {/*  <ExchangeRatesPage />*/}
          {/*</Route>*/}
          <Route path='/converter' component={ConverterPage} />
          {/*<Route path='/converter'>*/}
          {/*  <ConverterPage />*/}
          {/*</Route>*/}
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
