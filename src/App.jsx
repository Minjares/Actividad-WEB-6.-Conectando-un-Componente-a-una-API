import { useState } from 'react'
import './App.css'
import Clima from './Clima'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Clima loc="Durango"/>
    </div>
  )
}

export default App
