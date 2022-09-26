import React from 'react'
import Mask from '../assets/Mask-Group.png'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const ContactoPage = () => {
    return (
        <section id='ContantPage' className='h-[100vH] bg-pacific-blue-600 p-20 grid grid-cols-2'>
            <div className='h-auto'>
                <img className='w-[90%] mx-auto' src={Mask} alt="image" />
                <div className='flex ml-[5%] mt-5 gap-3'>
                    <a href="https://www.linkedin.com/in/sergio-sánchez-o/" target="_blank" ><BsLinkedin className='text-4xl'></BsLinkedin></a>
                    <a href="https://www.instagram.com/checho6040/?hl=es-la" target="_blank" ><BsInstagram className='text-4xl'></BsInstagram></a>
                    <a href="https://github.com/sancho6040" target="_blank" ><BsGithub className='text-4xl'></BsGithub></a>
                </div>
            </div>
            <div className='h-auto bg-pacific-blue-50 rounded-3xl p-6'>
                <form className='h-full flex flex-col justify-around' action="https://getform.io/f/4103bc1f-99a2-45ac-9813-3e07928fd916" method="POST">
                    <input className='rounded-2xl p-3 text-shade' type="text" placeholder='nombre' required />
                    <input className='rounded-2xl p-3 text-shade' type="text" placeholder='e-mail' required />
                    <textarea className='rounded-2xl p-3 h-3/5 text-shade resize-none' placeholder='descripcion' required />
                    <button className='rounded-3xl items-end bg-pacific-blue-400 py-3 text-2xl'>enviar</button>
                </form>
            </div>

        </section>
    )
}