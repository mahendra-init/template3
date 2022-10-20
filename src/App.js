import React from 'react'
import CardCon from './components/CardCon'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='m-24 font-sans'>
      <Navbar/>
      <CardCon/>
      <Footer/>
    </div>
  )
}

export default App