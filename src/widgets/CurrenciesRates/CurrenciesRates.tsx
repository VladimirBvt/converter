import React from 'react';
import {ICurrencyRates} from '../../models/ICurrencyRates';
import {getRateValue} from '../../help/help';
import {useAppSelector} from '../../hooks/redux';

interface ICurrencyRatesProps {
  data: ICurrencyRates
}

const CurrenciesRates = ({ data }: ICurrencyRatesProps) => {

  const {currencyDescriptions, allCurrencyRates, isLoadingDescription, errorDescription} = useAppSelector(state => state.currencyReducer)

  return (
    <div>
      <div>
        {
          data && Object.entries(data).map((item, index) => {
            const rate = item[0].substring(3, 6)

            return (
              <div key={index}>
                {
                  currencyDescriptions && <div>{currencyDescriptions[rate]}</div>
                }
                <div>1 {rate} = {getRateValue(item[1])} {item[0].substring(0, 3)}</div>
              </div>
              )
          })
        }
      </div>

      {/*<div>*/}
      {/*  <h2>Курс всех валют</h2>*/}
      {/*  <div>*/}
      {/*    {allCurrencyRates && Object.entries(allCurrencyRates).map((item, index) => {*/}
      {/*      const rate = item[0].substring(3, 6)*/}
      {/*      // console.log(item)*/}

      {/*      return (*/}
      {/*        <div key={index}>*/}
      {/*          <div>1 {rate} = {getRateValue(item[1])} {item[0].substring(0, 3)}</div>*/}
      {/*        </div>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default CurrenciesRates;
