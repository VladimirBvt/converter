import React from 'react';
import styles from './exchangeRatesUpdateButton.module.scss'
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchCurrenciesRates} from '../../store/reducers/ActionCreators';

const ExchangeRatesUpdateButton = () => {

  const {basisCurrency} = useAppSelector(state => state.currencyReducer)
  const dispatch = useAppDispatch()

  const handleButtonClick = () => {
    dispatch(fetchCurrenciesRates(basisCurrency))
  }

  return (
    <button className={styles.button} onClick={handleButtonClick}>
      Обновить
    </button>
  );
};

export default ExchangeRatesUpdateButton;
