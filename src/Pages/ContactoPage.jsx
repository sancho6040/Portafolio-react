import React from 'react'
import Mask from '../assets/Mask-Group.png'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const ContactoPage = () => {
    return (
        <section className='h-[100vH] bg-pacific-blue-600 p-20 grid grid-cols-2'>
            <div className='h-auto'>
                <img className='w-[90%] mx-auto' src={Mask} alt="image" />
                <div className='flex ml-[5%] mt-5 gap-3'>
                    <BsLinkedin className='text-4xl'></BsLinkedin>
                    <BsInstagram className='text-4xl'></BsInstagram>
                    <BsGithub className='text-4xl'></BsGithub>
                </div>
            </div>
            <div className='h-auto bg-pacific-blue-50 rounded-3xl p-6'>
                <form className='h-full flex flex-col justify-around'>
                    <input className='rounded-2xl p-3 text-shade' type="text" placeholder='nombre' required/>
                    <input className='rounded-2xl p-3 text-shade' type="text" placeholder='e-mail' required/>
                    <textarea className='rounded-2xl p-3 h-3/5 text-shade resize-none' placeholder='descripcion' required/>
                    <button className='rounded-3xl items-end bg-pacific-blue-400 py-3 text-2xl'>enviar</button>
                </form>
            </div>

        </section>
    )
}