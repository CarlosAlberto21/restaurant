import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import AppStore from '../components/AppStore/AppStore'
import Testimonial from '../components/Testimonial/Testimonial' 
import AOS from 'aos'
import 'aos/dist/aos.css'

const Menu = () => {

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
    <div className='bg-white dark:dark:bg-gray-900
    dark:text-white duration-200'>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
    </div>
  )
}

export default Menu