import React from 'react'
import { Converter, Header } from './container'

import './scss/index.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Converter />
    </div>
  )
}

export default App