import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylesheets/style.css';
import QuoteManager from './components/quotes/QuoteManager';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Quotes from the great Puh</h1>
     <QuoteManager/>
    </>
  )
}

export default App
