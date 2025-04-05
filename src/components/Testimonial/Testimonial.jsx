import React from 'react'
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Caracas",
        job: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem?",
        img: "https://picsum.photos/101/101"

    },
    {
        id: 1,
        name: "Madrid",
        job: "Designer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem?",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 1,
        name: "Paris",
        job: "Developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem?",
        img: "https://picsum.photos/103/103"
    },
];


const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <div data-aos="fade-up"data-aos-duration="300" className='py-10'>
                <div className='container'>
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent
                        bg-gradient-to-r from-primary to-secondary'>
                            Imagenes
                        </p>
                        <h1 className='text-3xl font-bold'>
                            Imagenes
                        </h1>
                        <p className='text-xs text-gray-400'>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit veniam quibusdam enim illo! Hic voluptatibus sapiente tempora ut ratione?
                        </p>
                        {/*Testimonial section*/}
                        <div data-aos="zoom-in"data-aos-duration="300" className='grid grid-cols-1 gap-8 max-w-[600px] mx-auto'>
                            <Slider {...settings}>
                                {testimonialData.map(({ id, name, text, img }) => {

                                    return (
                                
                                <div key={id} className='my-6'>

                                    <div className='flex items-center justify-center flex-col gap-4
                                    text-center shadow-lg mx-4  rounded-xl dark:bg-gray-800
                                    bg-primary/10 relative p-4'>
                                        <img src={img} alt="" className='rounded-full block mx-auto'/>
                                        <p className='text-gray-500 text-sm '>{text}</p>
                                        <h1 className='font-bold text-xl'>{name}</h1>
                                    </div>
                                </div>

                                );
                                })}
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial