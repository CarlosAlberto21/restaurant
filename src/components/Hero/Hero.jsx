import React from 'react'
import lomo from "../../assets/farfa.png"
import cordero from "../../assets/taco.png"


const Hero = () => {
  return (
    <>
      <div className="animate-gradient bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-50 flex items-center justify-center  
    min-h-{550px} sm:min-h-[600px]">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/*Text*/}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 justify-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Bienvenido a Foodie
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum perferendis? Ea, rerum inventore! Ut, nulla fugiat modi sed, temporibus voluptas facere dignissimos ipsam ex nostrum asperiores dolore provident, impedit autem ad qui minima! Quae earum blanditiis cum molestias dignissimos.

              </p>

              <div>
                <button className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l 
                                text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
                  Ordenar
                </button>
              </div>
            </div>
            <div className="order-1 sm:order-2 min-h-[450px] flex items-center justify-center relative">
              <div className='animate-spin-slow'>
                <img
                 className="w-300 sm:w-[450px]"
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={lomo}
                  alt="Pizza"
                />
              </div>
            </div>
          </div>
        </div>
        <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        /*
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient-move 10s ease infinite;
        }*/

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

          .animate-spin-slow {
    animation: spin 20s linear infinite;
  }
      `}</style>

      </div>
    </>
  )
}

export default Hero
