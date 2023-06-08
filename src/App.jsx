import { useState } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Donate from './components/Donate'
import News from './components/News'

function App() {

  return (
    <>
      <Header/>
      <Carousel/>
      <About/>
      <News/>
      <Donate/>
      <Contact/>
      <Footer/>
    </> 
  )
}

export default App
