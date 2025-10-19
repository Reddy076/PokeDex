import  SideNav  from "./components/SideNav"
import  PokeCard  from "./components/PokeCard"
import  Header  from "./components/Header"

import { useState } from "react"


function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0)
  

  return (
    <>
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon} />

    </> 
  )
}

export default App
