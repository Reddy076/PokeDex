import { first151Pokemon, getFullPokedexNumber } from "../utils";
import { useState } from "react";
export default function SideNav({ selectedPokemon , setSelectedPokemon , handleToggleMenu, showSideMenu }) {
  const [searchValue, setSearchValue]=useState('');

  const filterdPokemon=first151Pokemon.filter((ele, eleIndex)=>{
    if((getFullPokedexNumber(eleIndex)).includes(searchValue))
      return true;

    if(ele.toLowerCase().includes(searchValue.toLowerCase())){return true;}

    return false;
  })
  return (
    <nav className={showSideMenu ? 'open' : ''}>
        
          <div className={'header' + (showSideMenu ? ' open' : '')}>
            <button onClick={handleToggleMenu} className="open-nav-button">
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <h1 className="text-gradient"> Pokédex </h1>
          </div>
          <input placeholder="E.g:001 or Bulba...." value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
          {
          filterdPokemon.map((pokemon,pokemonIndex)=>{
            const originalIndex = first151Pokemon.indexOf(pokemon);
            return(
              <button onClick={
                () => {setSelectedPokemon(originalIndex); handleToggleMenu();}
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