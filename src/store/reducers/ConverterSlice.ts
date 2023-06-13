import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchConverterCurrency} from './ActionCreators';

interface IConverterState {
  amount: string;
  from: string;
  to: string;
  result: number | null,
  isLoading: boolean,
  error: string
}

const initialState: IConverterState = {
  amount: '1',
  from: 'RUB',
  to: 'USD',
  result: null,
  isLoading: false,
  error: ''
}

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setFromCurrency(state, action: PayloadAction<string>) {
      state.from = action.payload
    },
    setToCurrency(state, action: PayloadAction<string>) {
      state.to = action.payload
    },
    setAmount(state, action: PayloadAction<string>) {
      state.amount = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConverterCurrency.pending, (state, action) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchConverterCurrency.fulfilled, (state, action) => {
        state.result = action.payload
        state.isLoading = false
      })
  }
})

export default converterSlice.reducer
