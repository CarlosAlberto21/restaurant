import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer' 
import Menu from './Views/Menu';
import Order from './Views/Order';
import Nosotros from './Views/Nosotros';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';


const App = () => {
  return (
    <div>
    <Navbar /> 
    <Hero/>
    <Banner/>
 
    </div>
  )
}

export default App


