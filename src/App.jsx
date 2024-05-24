import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCode from "react-qr-code";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QRCode value="hey" />
    </>
  )
}

export default App
