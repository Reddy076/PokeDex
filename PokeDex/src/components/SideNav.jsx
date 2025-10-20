import { first151Pokemon, getFullPokedexNumber } from "../utils";
import { useState } from "react";
export default function SideNav({ selectedPokemon , setSelectedPokemon}) {
  const [searchValue, setSearchValue]=useState('');

  const filterdPokemon=first151Pokemon.filter((ele, eleIndex)=>{
    if((getFullPokedexNumber(eleIndex)).includes(searchValue))
      return true;

    if(ele.toLowerCase().includes(searchValue.toLowerCase())){return true;}

    return false;
  })
  return (
    <nav>
        
          <div className={'header'}>
            <h1 className="text-gradient"> Pokédex </h1>
          </div>
          <input placeholder="E.g:001 or Bulba...." value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
          {
          filterdPokemon.map((pokemon,pokemonIndex)=>{
            const originalIndex = first151Pokemon.indexOf(pokemon);
            return(
              <button onClick={
                () => setSelectedPokemon(originalIndex)
              } 
              key={originalIndex} className={'nav-card '+
                (originalIndex === selectedPokemon ? 'nav-card-selected':' ')
              }>
                <p>{getFullPokedexNumber(originalIndex)}</p>
                <p>{pokemon} </p>
              </button>
            )
          })
        }
    </nav>
  );
}