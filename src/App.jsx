import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './features/home/components/Home'
import Footer from '../src/components/footer/Footer'
import Header from '../src/components/header/Header'
import '../mediaquery.css'
import Fake from './fake'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='wrapper'>
    <Header/>
    <Home/>
    <Footer/>
  </div>
    </>
  )
}

export default App
