import React from 'react'
import PlayStore from '../../assets/pS.png'
import AppStoreI from '../../assets/appS.png'
import Gift from '../../assets/bike.jpg'

const AppStore = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800 py-14'>
                <div className="container">
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="300"
                            className='space-y-6 max-w-xl mx-auto'>
                            <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-400
                            sm:text-4xl sm:text-left text-center'>
                                Get the latest from the eeeeeeeedqdqApp Store
                            </h1>
                            <div className='flex flex-wrap justify-center items-center sm:justify-start'>
                                <a href="#">
                                    <img src={PlayStore} alt="" className='max-w-[150px] sm:max-w-[120px]
                                md:max-w-[200px]'/>
                                </a>
                                <a href="#">
                                    <img src={AppStoreI} alt="" className='max-w-[150px] sm:max-w-[120px]
                                md:max-w-[200px]'/>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src={Gift} alt="" className='max-w-[300px] mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStore