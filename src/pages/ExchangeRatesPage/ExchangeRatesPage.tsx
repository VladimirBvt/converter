import React, {FC} from 'react';
import CurrenciesList from '../../widgets/CurrenciesList/CurrenciesList';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import Select from '../../shared/Select/Select';
import {currencySlice} from '../../store/reducers/CurrencySlice';

const ExchangeRatesPage: FC = () => {

  const {basisCurrency, basisCurrencies} = useAppSelector(state => state.currencyReducer)
  const {setBasisCurrency} = currencySlice.actions
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Курсы валют</h2>
      <div>
        Базовая валюта:
        <Select />
      </div>

      <CurrenciesList />
    </div>
  );
};

export default ExchangeRatesPage;
