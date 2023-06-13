import {api_key, base_url} from '../../app/config';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ICurrencyRates} from '../../models/ICurrencyRates';
import {ICurrencyDescriptions} from '../../models/ICurrencyDescriptions';

const headers = new Headers()
if (typeof api_key === 'string') {
  headers.append('apikey', api_key)
}

export const fetchCurrenciesRates = createAsyncThunk<ICurrencyRates, string | null>(
  'currenciesRates/fetchCurrenciesRates',
  async function (source: string | null, {rejectWithValue}) {
    try {
      const response = await fetch(`${base_url}/live?source=${source}&currencies=USD,EUR,GBP,RUB`, {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      })
      const data = await response.json()

      if (!data.success) {
        throw new Error('Server error!')
      }

      return data.quotes
    } catch (err) {
      let errorMessage = 'Failed to do something exceptional'
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
      console.log(errorMessage)
    }
  }
)

export const fetchCurrenciesDescription = createAsyncThunk<ICurrencyDescriptions | null>(
  'currencies/fetchDescription',
  async function (_, {rejectWithValue}) {
    try {
      const response = await fetch(`${base_url}/list`, {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      })
      const data = await response.json()

      if (!data.success) {
        throw new Error('Server error!')
      }

      return data.currencies
    } catch (err) {
      let errorMessage = 'Failed to do something exceptional'
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
      console.log(errorMessage)
    }
  }
)

export const fetchAllCurrencyRates = createAsyncThunk<ICurrencyRates | null, string>(
  'allCurrenciesRates/fetchAllCurrenciesRates',
  async function (source: string, {rejectWithValue}) {
    try {
      const response = await fetch(`${base_url}/live?source=${source}`, {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      })
      const data = await response.json()

      if (!data.success) {
        throw new Error('Server error!')
      }

      return data.quotes
    } catch (err) {
      let errorMessage = 'Failed to do something exceptional'
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
      console.log(errorMessage)
    }
  }
)

interface IConverterOptions {
  from: string,
  to: string,
  amount: string
}

export const fetchConverterCurrency = createAsyncThunk<number, IConverterOptions>(
  'converterCurrency/fetchConverterCurrency',
  async function (converterOptions: IConverterOptions, {rejectWithValue}) {
    try {
      const response = await fetch(`${base_url}/convert?to=${converterOptions.to}&from=${converterOptions.from}&amount=${converterOptions.amount}`, {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      })
      const data = await response.json()

      if (!data.success) {
        throw new Error('Server error!')
      }

      return data.result
    } catch (err) {
      let errorMessage = 'Failed to do something exceptional'
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
      console.log(errorMessage)
    }
  }
)
