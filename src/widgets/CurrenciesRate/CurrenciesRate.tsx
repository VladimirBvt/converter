import React from 'react';
import {getRateValue} from '../../help/help';
import styles from './currenciesRate.module.scss'

interface ICurrencyDescriptionsProps {
  currencyDescription: string;
  basisCurrency: string;
  rate: string;
  exchangeRateValue: number;
}

const CurrenciesRate = ({ currencyDescription, rate, exchangeRateValue, basisCurrency }: ICurrencyDescriptionsProps) => {
  return (
    <div className={styles.main}>

      <div>1 {rate} = <span className={styles.value}>{getRateValue(exchangeRateValue)}</span> {basisCurrency}</div>

      {currencyDescription && <div className={styles.description}>{currencyDescription}</div>}
    </div>
  );
};

export default CurrenciesRate;
