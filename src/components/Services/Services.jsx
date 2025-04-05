import React from 'react'
import Img2 from '../../assets/pollo.png';


const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Pollo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
    },
    {
        id: 2,
        img: Img2,
        name: "Carne",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
    },
    {
        id: 3,
        img: Img2,
        name: "Chittle pottle",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!",
    },

]

const Services = () => {
    return (
        <>
            <div className='py-10'>
                <div className='container'>
                    {/*Headers Section*/}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            Our services
                        </p>
                        <h1 className='text-3xl font-bold'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel ullam quae mollitia ea ducimus, officia harum aspernatur possimus itaque!
                        </p>
                    </div>
                    {/*Cards Section*/}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5
            place-items-center'>
                        {ServicesData.map(({ id, img, name, description }) => {
                            return (<div
                                data-aos="zoom-in"
                                data-aos-duration="300" 
                                key={id} className='max-w-[300px]
                    group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                    hover:text-white duration-300 p-4 shadow-xl'>
                                <div className='h-[140px]'>
                                    <img src={img} alt=""
                                        className='max-w-[200px] mx-auto bloock tramsform -translate-y-14 
                        group-hover:scale-105 
                        group-hover:rotate-6 duration-300' />
                                </div>
                                <div className='p-4 text-center'>
                                    <h1 className='text-xl font-bold'>{name}</h1>
                                    <p className='text-gray-500 text-sm line-clamp-2'>{description}</p>

                                </div>
                            </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services