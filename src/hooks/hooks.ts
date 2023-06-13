import React, {useEffect, useRef} from 'react';
import {fetchCurrenciesRates} from '../store/reducers/ActionCreators';
import {useAppDispatch, useAppSelector} from './redux';

export const useUpdateExchangeRates = () => {
  const {basisCurrency} = useAppSelector(state => state.currencyReducer)
  const dispatch = useAppDispatch()
  let intervalIdRef: React.MutableRefObject<null | number> = useRef(null)

  useEffect(() => {
    const delay = 60000
    intervalIdRef.current = window.setInterval(() => {
      return dispatch(fetchCurrenciesRates(basisCurrency))
    }, delay)

    return window.clearInterval(intervalIdRef.current)
    }, [basisCurrency, dispatch])
}
