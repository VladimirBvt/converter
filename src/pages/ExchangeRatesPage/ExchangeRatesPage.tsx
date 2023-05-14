import React, {FC} from 'react';
import CurrenciesList from '../../widgets/CurrenciesList/CurrenciesList';

const ExchangeRatesPage: FC = () => {
  return (
    <div>
      <h2>Курсы валют</h2>
      <div>Базовая валюта: RUB</div>

      <CurrenciesList />
    </div>
  );
};

export default ExchangeRatesPage;
