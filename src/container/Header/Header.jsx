import React from 'react'
import './Header.scss'

const header = () => {
  const currentDateTime = new Date()
  const day = currentDateTime.getDate()
  const month = currentDateTime.getMonth() + 1
  const year = currentDateTime.getFullYear()

  return (
    <div className="header section__padding flex__center wrapper">
      <div className="header__wrapper">
        <div className="header__title">
          <h1>
            Free
            <br /> Currency
            <br /> Converter
          </h1>
        </div>
        <div className="header__currency">
          <h3>USD - 40₴ </h3>
          <h3>EUR - 40₴ </h3>
          <p>
            Last update {day}/{month}/{year}
          </p>
          <p>Enter the values in the currency calculator.</p>
          <a href="#Converter">Open Converter</a>
        </div>
      </div>
    </div>
  )
}

export default header
