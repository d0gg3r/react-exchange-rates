import React from 'react'

import './Currency.scss'
const Currency = ({
  currency,
  amount,
  onAmountChange,
  onCurrencyChange,
  name,
}) => {
  const currencies = ['USD', 'EUR', 'GBP', 'UAH', 'CZK', 'PLN', 'BTC', 'ETH']
  return (
    <div className="currency">
      <input
        name={name}
        placeholder="Enter value"
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Currency
