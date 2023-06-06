import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICurrencyRates} from '../../models/ICurrencyRates';
import {ICurrencyDescriptions} from '../../models/ICurrencyDescriptions';
import {fetchAllCurrencyRates, fetchCurrenciesDescription, fetchCurrenciesRates} from './ActionCreators';

interface ICurrencyState {
  currenciesRates: ICurrencyRates;
  isLoading: boolean;
  error: string;

  basisCurrency: string;
  basisCurrencies: string[];

  currencyDescriptions: ICurrencyDescriptions | null;
  isLoadingDescription: boolean;
  errorDescription: string;

  allCurrencyRates: ICurrencyRates | null;
  isLoadingAllCurrencyRates: boolean;
  errorAllCurrencyRates: string;
}

const initialState: ICurrencyState = {
  currenciesRates: {},
  isLoading: false,
  error: '',

  basisCurrency: 'RUB',
  basisCurrencies: ['RUB', 'USD', 'EUR'],

  currencyDescriptions: null,
  isLoadingDescription: false,
  errorDescription: '',

  allCurrencyRates: null,
  isLoadingAllCurrencyRates: false,
  errorAllCurrencyRates: ''
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBasisCurrency(state, action: PayloadAction<string>) {
      state.basisCurrency = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrenciesRates.pending, (state, action) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchCurrenciesRates.fulfilled, (state, action) => {
        state.currenciesRates = action.payload
        state.isLoading = false
      })
      .addCase(fetchCurrenciesDescription.pending, (state, action) => {
        state.isLoadingDescription = true
        state.errorDescription = ''
      })
      .addCase(fetchCurrenciesDescription.fulfilled, (state, action) => {
        state.currencyDescriptions = action.payload
        state.isLoadingDescription = false
      })
      .addCase(fetchAllCurrencyRates.pending, (state, action) => {
        state.isLoadingAllCurrencyRates = true
        state.errorAllCurrencyRates = ''
      })
      .addCase(fetchAllCurrencyRates.fulfilled, (state, action) => {
        state.allCurrencyRates = action.payload
        state.isLoadingAllCurrencyRates = false
      })
  }
})

export default currencySlice.reducer
