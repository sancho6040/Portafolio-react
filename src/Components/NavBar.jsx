import React from 'react'

import Logo from '../assets/Logo-White.png'

export const NavBar = () => {
    return (
        <div className='bg-shade py-5 text-White flex justify-around shadow-xl fixed w-[100vw] z-50'>
            {/* cambiar a por link "react router dom" */}
            <a className='text-lg' href='#PerfilPage'>¿Quién soy?</a>
            <a className='text-lg' href='#EstudiosPage'>Estudios</a>
            <div>
                <a href="#HeroPage"><img className='h-24 inline-block absolute left-[49%] -translate-x-1/2 -translate-y-1/2 top-10' src={Logo} alt="Logo" /></a>
            </div>
            <a className='text-lg' href='#PortafolioPage'>Portafolio</a>
            <a className='text-lg' href='#ContantPage'>Contacto</a>
        </div>
    )
}
