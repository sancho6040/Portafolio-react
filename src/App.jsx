import React from 'react'
import { NavBar } from './Components/NavBar'
import { HeroPage } from './Pages/HeroPage'
import { PerfilPage } from './Pages/PerfilPage'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroPage></HeroPage>
      <PerfilPage></PerfilPage>
    </>
  )
}

export default App