import { useState } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Carousel/>
      <About/>
      <Contact/>
      <Footer/>
    </> 
  )
}

export default App
