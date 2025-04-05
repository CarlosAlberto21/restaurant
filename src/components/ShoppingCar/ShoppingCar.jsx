import React from 'react'
import Img2 from '../../assets/pollo.png';

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Pollo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
        starks: "5 estrellas"
    },
    {
        id: 2,
        img: Img2,
        name: "Carne",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
        starks: "5 estrellas"
    },
    {
        id: 3,
        img: Img2,
        name: "Chittle pottle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
        starks: "5 estrellas"
    },
    {
        id: 4,
        img: Img2,
        name: "Pollo",
        description: "Lobg-primaryrem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
        starks: "5 estrellas"
    },
    {
        id: 5,
        img: Img2,
        name: "Carne",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
        starks: "5 estrellas"
    },
    {
        id: 6,
        img: Img2,
        name: "Chittle pottle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
        starks: "5 estrellas"
    },

]
const ShoppingCar = () => {
  return (
    <>  

        <div className='border-t border-gray-950'>
            <div className='flex justify-between divide-x divide-gray-950'>
 
                <div className='flex flex-col gap-5 px-3'>
                <h1 className='text-3xl font-bold'>Shopping Car</h1>
                <ul className='flex flex-col gap-3'>
                    <li className='hover:bg-gray-950 hover:bg-opacity-50
'>Filter</li>
                    <li className=''>Rebaja</li>
                    <li>Precio</li>
                    <li>Cantidad</li>
                </ul>
                </div>
                


            <div className='container mx-auto py-14 bg-yellow-50 dark:bg-gray-800 '>
                
                {/*Cards Section*/}
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm: md:gap-5
           place-items-center'>
                       {ServicesData.map(({ id, img, name, description,starks }) => {
                           return (<div
                               data-aos="zoom-in"
                               data-aos-duration="300" 
                               key={id} className='max-w-[300px]
                   group rounded-2xl bg-white dark:bg-gray-800 hover:bg-gradient-to-bl from-green-300
                   via-yellow-200 to-yellow-50 
hover:text-white duration-300 p-12 shadow-xl'>
                               <div className='h-[140px]'>
                                   <img src={img} alt=""
                                       className='max-w-[180px] mx-auto bloock tramsform -translate-y-14 
                       group-hover:scale-105 
                       group-hover:rotate-6 duration-300' />
                               </div>
                               <div className='p-4 text-center'>
                                   <h1 className='text-xl font-bold'>{name}</h1>
                                   <p className='text-gray-500 text-sm line-clamp-2'>{description}</p>

                               </div>
                               <div>
                                   <h2>{starks}</h2>
                               </div>
                           </div>
                           );
                       })}

                   </div>          
           </div>
            </div>
          
        </div>
         
    </>
  )
}

export default ShoppingCar