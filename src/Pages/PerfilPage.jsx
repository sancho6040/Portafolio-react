import React from 'react'
import Photo from '../assets/perfil.jpg'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import Pato from "../assets/pato.png"
import Ecomerce from "../assets/eCommerce.png"
import Chicken from "../assets/chiken.png"

export const PerfilPage = () => {
  return (
    <section id='PerfilPage' className='h-[100vH] bg-pacific-blue-100 pt-32 px-20 flex-row flex content-center gap-20'>
      <div className='h-full w-full basis-2/5'>
        <img className='rounded-full h-1/2 mx-auto mb-8 border-8 border-dashed border-shade ' src={Photo} alt="" />
        <h2 className='text-4xl font-bold text-shade mb-8'>Sergio Andrés Sánchez O.</h2>
        <p className='text-2xl text-right text-shade'>
          Estudiante <br />
          Ingenieria Multimedia <br />
          Universidad de <br />
          San Buenaventura <br />
          Bogotá - Colombia <br />
        </p>
      </div>
      <div className='h-full w-full basis-3/5 flex flex-col justify-around p-14'>
        <p className='text-2xl text-shade'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos, error beatae placeat aperiam libero quos nostrum obcaecati iusto esse alias similique qui ex ducimus temporibus dignissimos iste expedita unde consectetur, repellat voluptatibus sequi minima perspiciatis? Commodi totam dolor iste!</p>
        <div className='flex justify-center gap-5 my-8 bg-shade p-5'>
          <a href="https://www.linkedin.com/in/sergio-sánchez-o/" target="_blank" ><BsLinkedin className='text-4xl'></BsLinkedin></a>
          <a href="https://www.instagram.com/checho6040/?hl=es-la" target="_blank" ><BsInstagram className='text-4xl'></BsInstagram></a>
          <a href="https://github.com/sancho6040" target="_blank" ><BsGithub className='text-4xl'></BsGithub></a>
        </div>
        <div className='grid grid-flow-col-3 grid-flow-col h-1/3'>
          <img className='h-full object-cover' src={Pato} alt="pato" />
          <img className='h-full object-cover' src={Ecomerce} alt="eCommerce" />
          <img className='h-full object-cover' src={Chicken} alt="chiken" />
        </div>
      </div>
    </section>
  )
};
