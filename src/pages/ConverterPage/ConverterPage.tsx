import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchConverterCurrency} from '../../store/reducers/ActionCreators';
import {converterSlice} from '../../store/reducers/ConverterSlice';
import styles from './converterPage.module.scss'

const ConverterPage = () => {

  const {basisCurrencies} = useAppSelector(state => state.currencyReducer)
  const {amount, from, to, result} = useAppSelector(state => state.converterReducer)
  const {setFromCurrency, setToCurrency, setAmount} = converterSlice.actions
  const dispatch = useAppDispatch()

  // const [amountValue, setAmountValue] = useState('')
  // const [fromCurrency, setFromCurrency] = useState('')
  // const [toCurrency, setToCurrency] = useState('')

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setAmountValue(e.target.value)
    dispatch(setAmount(e.target.value))
  }

  const handleButtonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(fetchConverterCurrency({amount, from, to}))
  }

  const handleFromSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFromCurrency(e.target.value))
  }

  const handleToSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setToCurrency(e.target.value))
  }

  return (
    <div>
      <h1>ConverterPage</h1>

      <form>
        Из
        <select onChange={handleFromSelect}>
          {basisCurrencies.map((optionItem, index) => {
            return <option key={index}>{optionItem}</option>
          })}
        </select>
        в
        <select defaultValue='USD' onChange={handleToSelect}>
          {basisCurrencies.map((optionItem, index) => {
            return <option key={index}>{optionItem}</option>
          })}
        </select>

        <label htmlFor="from">Сумма</label>
        <input type="number" id="from" min={0} onChange={handleValueChange} value={amount} />

        <button onClick={handleButtonSubmit}>Отправить</button>
      </form>

      <output className={styles.output}>{result && result.toFixed(2)}</output>
    </div>
  );
};

export default ConverterPage;
