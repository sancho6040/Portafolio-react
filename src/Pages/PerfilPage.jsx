import React from 'react'
import Photo from '../assets/perfil.jpg'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const PerfilPage = () => {
  return (
    <section className='h-[100vH] bg-pacific-blue-100 p-20 flex-row flex gap-20'>
      <div className='h-full w-full basis-2/5 bg-shade'>
        <img className='rounded-full h-1/2' src={Photo} alt="" />
        <h2 className='text-5xl font-bold'>Sergio Andrés Sánchez O.</h2>
        <p className='text-2xl'>
          Estudiante <br />
          Ingenieria Multimedia <br />
          Universidad de <br />
          San Buenaventura <br />
          Bogotá - Colombia <br />
        </p>
      </div>
      <div className='h-full w-full basis-3/5 bg-shade'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos, error beatae placeat aperiam libero quos nostrum obcaecati iusto esse alias similique qui ex ducimus temporibus dignissimos iste expedita unde consectetur, repellat voluptatibus sequi minima perspiciatis? Commodi totam dolor iste!</p>
        <div>
          <BsLinkedin></BsLinkedin>
          <BsInstagram></BsInstagram>
          <BsInstagram></BsInstagram>
        </div>
        <div>
          <div className=''></div>
        </div>
      </div>
    </section>
  )
};
