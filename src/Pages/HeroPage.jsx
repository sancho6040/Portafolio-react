import React from 'react'
import BgImage from '../assets/Hero-bg.jpg'

export const HeroPage = () => {
  return (
    <div className='h-[100vh] w-full bg-slate-500'>
        <img className='w-full object-cover' src={BgImage} alt="Backgound image" />
        <button className='bg-pacific-blue-400 px-6 py-2 rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:top-3/4 lg:text-3xl lg:px-14 lg:py-4'>Let's see</button>
    </div>
  )
}
