import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'reactstrap'
import PublishRide from './Components/PublishRide'
import Payment from './Components/Payment'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <div>
      {/* <PublishRide/> */}
      <Payment/>
    </div>
  )
}

export default App
