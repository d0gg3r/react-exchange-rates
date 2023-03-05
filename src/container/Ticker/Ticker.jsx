import React from 'react'

import './Ticker.scss'

const TickerMessage = ({ msg, times }) => {
  const message = Array.from({ length: times }, (_, index) => (
    <span key={index}>{msg} </span>
  ))

  return <div className="ticker-text">{message}</div>
}

const Ticker = () => {
  return (
    <div className="ticker text-focus-in">
      <div className="ticker-container">
        <TickerMessage
          msg="DESIGNED AND DEVELOPED BY DOGGER //////"
          times={10}
        />
      </div>
    </div>
  )
}

export default Ticker
