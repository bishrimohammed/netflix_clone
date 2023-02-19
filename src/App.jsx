import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Features from './components/Features'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <Header /> 
      <Features />
      <Footer/>
    </>
  )
}

export default App
