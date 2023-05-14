import React from 'react';
import CurrenciesList from '../../widgets/CurrenciesList/CurrenciesList';

const ExchangeRatesPage = () => {
  return (
    <div>
      <h2>Курсы валют</h2>
      <div>Базовая валюта: RUB</div>

      <CurrenciesList />
    </div>
  );
};

export default ExchangeRatesPage;
