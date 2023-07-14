import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'reactstrap'
import PublishRide from './Components/PublishRide'
import Payment from './Components/Payment'
import SearchRide from './Components/SearchRide'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <div>
      {/* <PublishRide/> */}
      <Payment/>
      <SearchRide/>
    </div>
  )
}

export default App
