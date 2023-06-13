import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchConverterCurrency} from '../../store/reducers/ActionCreators';
import {converterSlice} from '../../store/reducers/ConverterSlice';
import styles from './converterPage.module.scss'
import ReverseImage from '../../assets/revers.png'

const ConverterPage = () => {

  const {basisCurrencies} = useAppSelector(state => state.currencyReducer)
  const {amount, from, to, result, isLoading} = useAppSelector(state => state.converterReducer)
  const {setFromCurrency, setToCurrency, setAmount} = converterSlice.actions
  const dispatch = useAppDispatch()

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(e.target.value))
  }

  const handleButtonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (Number(amount) > 0) {
      dispatch(fetchConverterCurrency({amount, from, to}))
    }
  }

  const handleFromSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFromCurrency(e.target.value))
  }

  const handleToSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setToCurrency(e.target.value))
  }

  const handleReverseCurrencies = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setFromCurrency(to))
    dispatch(setToCurrency(from))
  }

  return (
    <div>
      <h1 className={styles.title}>Онлайн конвертер</h1>

      <form className={styles.form}>
        <span>Из</span>
        <select onChange={handleFromSelect} value={from}>
          {basisCurrencies.map((optionItem, index) => {
            return <option key={index}>{optionItem}</option>
          })}
        </select>
        <button className={styles.reverseButton} onClick={handleReverseCurrencies}>
          <img src={ReverseImage} alt="reverse" />
        </button>
        <span>в</span>
        <select onChange={handleToSelect} value={to}>
          {basisCurrencies.map((optionItem, index) => {
            return <option key={index}>{optionItem}</option>
          })}
        </select>

        <label htmlFor="from">Сумма</label>
        <input type="number" id="from" min={1} onChange={handleValueChange} value={amount} />

        <button className={styles.submitButton} onClick={handleButtonSubmit}>Отправить</button>
      </form>

      <div className={styles.result}>
        <span>Результат</span>
        <output className={styles.output}>
          {isLoading ? <div>Загрузка...</div> : result && result.toFixed(2)}
        </output>
      </div>
    </div>
  );
};

export default ConverterPage;
