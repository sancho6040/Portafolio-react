import React from 'react'
import { NavBar } from './Components/NavBar'
import { HeroPage } from './Pages/HeroPage'
import { PerfilPage } from './Pages/PerfilPage'
import {EstudiosPage} from './Pages/EstudiosPage'
import {PortafolioPage} from './Pages/PortafolioPage'
import { ContactoPage } from './Pages/ContactoPage'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroPage></HeroPage>
      <PerfilPage></PerfilPage>
      <EstudiosPage></EstudiosPage>
      <PortafolioPage></PortafolioPage>
      <ContactoPage></ContactoPage>
    </>
  )
}

export default App