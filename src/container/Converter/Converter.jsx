import React from 'react'
import Currency from './Currency/Currency'
import axios from 'axios'
import { BsCurrencyBitcoin } from 'react-icons/bs'

import './Converter.scss'

const options = {
  method: 'GET',
  url: 'https://currencyscoop.p.rapidapi.com/latest',
  headers: {
    'X-RapidAPI-Key': '46bac45572mshf0b2f01ae6f2d12p140116jsn3ef3ad3792a7',
    'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com',
  },
}

const Converter = () => {
  const [rates, setRates] = React.useState([])
  const [currencyTo, setCurrencyTo] = React.useState('UAH')
  const [amountFrom, setAmountFrom] = React.useState()
  const [amountTo, setAmountTo] = React.useState()
  const [currencyFrom, setCurrencyFrom] = React.useState('USD')

  React.useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setRates(response.data.response.rates)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  function format(number) {
    return number.toFixed(3)
  }

  const handleAmountFrom = (amountFrom) => {
    setAmountTo(format((amountFrom * rates[currencyTo]) / rates[currencyFrom]))
    setAmountFrom(amountFrom)
  }

  const handleCurrencyFrom = (currencyFrom) => {
    setAmountTo(format((amountFrom * rates[currencyTo]) / rates[currencyFrom]))
    setCurrencyFrom(currencyFrom)
  }

  const handleAmountTo = (amountTo) => {
    setAmountFrom(format((amountTo * rates[currencyFrom]) / rates[currencyTo]))
    setAmountTo(amountTo)
  }

  const handleCurrencyTo = (currencyTo) => {
    setAmountFrom(format((amountTo * rates[currencyFrom]) / rates[currencyTo]))
    setCurrencyTo(currencyTo)
  }

  return (
    <div id="Converter" className="wrapper section__padding converter">
      <div className="blob">
        <div className="blob-1"></div>
        <div className="blob-3 flex__center">
          <BsCurrencyBitcoin />
        </div>
      </div>
      <div className="converter__container flex__center">
        <Currency
          amount={amountFrom}
          onAmountChange={handleAmountFrom}
          onCurrencyChange={handleCurrencyFrom}
          currency={currencyFrom}
          name="input1"
        />
        <div className="equals">
          <span>=</span>
        </div>
        <Currency
          name="input2"
          amount={amountTo}
          onCurrencyChange={handleCurrencyTo}
          onAmountChange={handleAmountTo}
          currency={currencyTo}
        />
      </div>
      <div className="blob">
        <div className="blob-2"></div>
      </div>
    </div>
  )
}

export default Converter
