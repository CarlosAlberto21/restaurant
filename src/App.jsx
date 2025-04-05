import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer' 
import Menu from './Views/Menu';
import Order from './Views/Order';
import Nosotros from './Views/Nosotros';


const App = () => {
  return (
    <div>
    
      
       <BrowserRouter>
       <Navbar/>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
 
    </div>
  )
}

export default App


