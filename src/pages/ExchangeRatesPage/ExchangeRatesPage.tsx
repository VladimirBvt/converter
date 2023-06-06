import React, {FC, useEffect} from 'react';
import CurrenciesRates from '../../widgets/CurrenciesRates/CurrenciesRates';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {currencySlice} from '../../store/reducers/CurrencySlice';
import {
  fetchAllCurrencyRates,
  fetchCurrenciesDescription,
  fetchCurrenciesRates,
} from '../../store/reducers/ActionCreators';
import BasisCurrencySelect from '../../widgets/BasisCurrencySelect/BasisCurrencySelect';
import styles from './exchangeRatesPage.module.scss'

const ExchangeRatesPage: FC = () => {

  const {
    basisCurrency,
    currenciesRates,
    currencyDescriptions,
    isLoading,
    error,
  } = useAppSelector(state => state.currencyReducer)
  const {setBasisCurrency} = currencySlice.actions
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrenciesRates(basisCurrency))
    dispatch(fetchCurrenciesDescription())
    dispatch(fetchAllCurrencyRates(basisCurrency))
  }, [dispatch, basisCurrency])

  return (
    <div>
      {/*<h2>Курсы валют</h2>*/}

      {error && <h2>{error}</h2>}
      {isLoading && <h2>Идет загрузка...</h2>}

      <div className={styles.basisCurrency}>
        <h2 className={styles.title}>Базовая валюта</h2>

        <BasisCurrencySelect />

        <div className={styles.basisDescription}>{currencyDescriptions && currencyDescriptions[basisCurrency]}</div>
      </div>

      <CurrenciesRates data={currenciesRates}/>
    </div>
  );
};

export default ExchangeRatesPage;
