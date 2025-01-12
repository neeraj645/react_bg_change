import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyBgs from './components/MyBgs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <MyBgs></MyBgs>

    </>
  )
}

export default App
