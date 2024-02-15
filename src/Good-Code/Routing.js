import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Chandra from './Chandra'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar><Home /></Navbar>} />
        <Route path="/home" element={<Navbar><Home /></Navbar>} />
        <Route path="/about" element={<Navbar><About /></Navbar>} />
        <Route path="/contact" element={<Navbar><Contact /></Navbar>} />
        <Route path="/chandra" element={<Navbar><Chandra /></Navbar>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
