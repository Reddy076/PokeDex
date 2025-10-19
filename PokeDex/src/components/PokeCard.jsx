import { useEffect, useState } from "react";
import { getPokedexNumber, getFullPokedexNumber } from "../utils";
import  TypeCard  from "./TypeCard";


export default function PokeCard({ selectedPokemon }) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [error, setError]=useState(null);
  const { name, height, abilities, stats = [], types = [], moves = [], sprites } = data || {}
  useEffect(() => {
    if (loading || !localStorage) { return }
    //check cache
    let cache = {}
    if (localStorage.getItem("pokedex")) {
      cache = JSON.parse(localStorage.getItem("pokedex"));
    }
    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon]);
      return;
    }
    async function fetchPokemonData() {
      try {
        const baseUrl = "https://pokeapi.co/api/v2/"
        const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon);
        const finaUrl = baseUrl + suffix
        const response = await fetch(finaUrl);
        const pokemonData = await response.json();
        setData(pokemonData);
        console.log(pokemonData)
        cache[selectedPokemon] = pokemonData
        localStorage.setItem("pokedex", JSON.stringify(cache));
      }
      catch (error) {
        console.log(error.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchPokemonData();
  }, [selectedPokemon]);
  if (loading || !data) {
    <div>
      <h4>loading...</h4>
    </div>
  }

  return (
    <div className="poke-card">
      <div>
        <h4>#{
          getFullPokedexNumber(selectedPokemon)
        } </h4>
        <h2>{name}</h2>
      </div>
      <div className="type-container">
        {
          types.map((typeObj, typeIndex) => {
            return (
              <TypeCard key={typeIndex} type={typeObj.type?.name} />
            )
          })
        }
      </div>
      <img className="default-img" src={'/pokemon/'+getFullPokedexNumber(selectedPokemon)+'.png'} alt={`${name}-large-image`} />
    </div>
  );
}