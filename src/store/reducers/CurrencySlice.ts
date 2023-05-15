import {ICurrency} from '../../models/ICurrency';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CurrencyState {
  currencies: ICurrency[];
  isLoading: boolean;
  error: string;
  basisCurrency: string,
  basisCurrencies: string[],
}

const initialState: CurrencyState = {
  currencies: [],
  isLoading: false,
  error: '',
  basisCurrency: 'RUB',
  basisCurrencies: ['RUB', 'USD', 'EUR', 'GBR'],
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBasisCurrency(state, action: PayloadAction<string>) {
      state.basisCurrency = action.payload
    }
  },
})

export default currencySlice.reducer
