import React from 'react'

import Logo from '../assets/Logo-White.png'

export const NavBar = () => {
    return (
        <div className='bg-shade py-5 text-White flex justify-around shadow-xl'>
            {/* cambiar a por link "react router dom" */}
            <a className='text-white'>¿Quién soy?</a>
            <a>Estudios</a>
            <div>
                <img className='h-24 inline-block absolute -translate-x-1/2 -translate-y-1/2 top-10' src={Logo} alt="Logo" />
            </div>
            <a>Portafolio</a>
            <a>Contacto</a>
        </div>
    )
}
