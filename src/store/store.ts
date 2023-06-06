import {combineReducers, configureStore} from '@reduxjs/toolkit';
import currencyReducer from './reducers/CurrencySlice'
import converterReducer from './reducers/ConverterSlice'

const rootReducer = combineReducers({
  currencyReducer,
  converterReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
