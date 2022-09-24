import React from 'react'
import UE from '../assets/UE-logo.png'
import RLogo from '../assets/React-logo.png'
import Html5 from '../assets/descarga.png'

export const EstudiosPage = () => {
  return (
    <section className='h-[100vH] bg-pacific-blue-300 p-20'>
      <h1 className='text-center mb-8 text-shade text-4xl font-bold'>Estudios</h1>
      <div className='flex justify-around h-1/2'>
        <img className='rounded-full' src={UE} alt="Unreal" />
        <img className='rounded-full' src={RLogo} alt="Logo React" />
        <img className='rounded-full' src={Html5} alt="Html" />
      </div>
      <p className='mt-8 text-2xl text-shade text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur corrupti reiciendis dicta quo? Soluta, perspiciatis? Asperiores laudantium esse provident quae optio fuga consectetur cum, doloremque velit, doloribus ipsum deserunt?</p>
    </section>
  )
}
