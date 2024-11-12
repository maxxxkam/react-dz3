import React from 'react'
import Header from './Components/Header/Header'

import Fooetr from './Components/Footer/Fooetr'
import { Route, Routes } from 'react-router-dom'
import Teastiminals from './Components/Teastiminals'
import Contact from './Components/Contact'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Testiminals' element={<Teastiminals />} />
        <Route path='/Contact' element={<Contact />} />


      
      </Routes>
      <Fooetr />
    </>
  )
}

export default App