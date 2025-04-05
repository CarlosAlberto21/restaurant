import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer' 
import Menu from './Views/Menu';
import Order from './Views/Order';
import Nosotros from './Views/Nosotros';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {


        React.useEffect(() => {
          AOS.init({
            duration: 500,
            offset:100,
            delay:100,
            easing: 'ease-in-out'
          });
      
          AOS.refresh();
        }, [])

  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default App


