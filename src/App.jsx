import React from 'react'
import { NavBar } from './Components/NavBar'
import { HeroPage } from './Pages/HeroPage'
import { PerfilPage } from './Pages/PerfilPage'
import EstudiosPage from './Pages/EstudiosPage'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroPage></HeroPage>
      <PerfilPage></PerfilPage>
      <EstudiosPage></EstudiosPage>
    </>
  )
}

export default App