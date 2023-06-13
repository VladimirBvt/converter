import React, {ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {currencySlice} from '../../store/reducers/CurrencySlice';

const BasisCurrencySelect = () => {

  const {basisCurrency, basisCurrencies} = useAppSelector(state => state.currencyReducer)
  const {setBasisCurrency} = currencySlice.actions
  const dispatch = useAppDispatch()

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => dispatch(setBasisCurrency(e.target.value))

  return (
    <select onChange={handleSelect} value={basisCurrency}>

      {basisCurrencies.map((optionItem, index) => {
        return <option key={index}>{optionItem}</option>
      })}

    </select>
  );
};

export default BasisCurrencySelect;
