// Creación de arreglo de proyectos para leer en sección portafolio
// Creación de mínimo 4 proyectos
// Aplicación TODO List (obligatorio) Done
// Aplicación de Héroes (obligatorio)
// Aplicación Clima (obligatorio)
// Aplicación Landing Page (obligatorio)

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import heroes from '../assets/proyecto-heroes.png';
import todo from '../assets/todo-app.png';
// import heroes from '../assets/proyecto-heroes.png';
// import heroes from '../assets/proyecto-heroes.png';
// import heroes from '../assets/proyecto-heroes.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const PortafolioPage = () => {
    return (
        <section id='PortafolioPage' className='h-[110vH] bg-pacific-blue-400 py-10 px-24'>
            <h1 className='text-center mb-8 text-shade text-4xl font-bold'>Portafolio</h1>
            <Swiper navigation={true} modules={[Navigation]} className="w-full h-full mb-8">
                <SwiperSlide>
                    <a href="https://proyecto-heroes.netlify.app">
                        <img
                            className="object-fill w-full h-auto"
                            src={heroes}
                            alt="image slide 1"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://sancho6040.github.io/ToDoApp_SergioSanchez/">
                        <img
                            className="object-fill w-full h-auto"
                            src={todo}
                            alt="image slide 2"
                            target="_blank"
                        />
                    </a>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <a href="https://proyecto-heroes.netlify.app">
                        <img
                            className="object-fill w-full h-auto"
                            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                            alt="image slide 3"
                        />
                    </a>
                </SwiperSlide> */}
            </Swiper>
        </section>
    )
}
