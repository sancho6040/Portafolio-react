// Creación de arreglo de proyectos para leer en sección portafolio
// Creación de mínimo 4 proyectos
// Aplicación TODO List (obligatorio)
// Aplicación de Héroes (obligatorio)
// Aplicación Clima (obligatorio)
// Aplicación Landing Page (obligatorio)

import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const PortafolioPage = () => {
  return (
    <section className='h-[95vH] bg-pacific-blue-400 p-20'>
      <h1 className='text-center mb-8 text-shade text-4xl font-bold'>Portafolio</h1>
        <Swiper navigation={true} modules={[Navigation]} className="w-full h-auto">
            <SwiperSlide>
                <img 
                    className="object-fill w-full h-96"
                    src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                    alt="image slide 1"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    className="object-fill w-full h-96"
                    src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                    alt="image slide 2"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img 
                    className="object-fill w-full h-96"
                    src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                    alt="image slide 3"
                />
            </SwiperSlide>
        </Swiper>
    </section>
  )
}
