import { useState } from 'react'

import './App.css'
import DaisyUi from './Components/DaisyUi/DaisyUi'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DaisyUi></DaisyUi>
      <h1 className='text-3xl bg-red-300'>Vite + React</h1>
     <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App

