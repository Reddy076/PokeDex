import { useEffect , useState } from "react";
export function PokeCard({selectedPokemon}){
  const [data, setData]=useState(null);
  const [loading, setLoading]=useState(false);
  //const [error, setError]=useState(null);
  useEffect(()=>{
    if(loading || !localStorage){ return }
    //check cache
    let cache={}
    if(localStorage.getItem("pokedex")){
      cache=JSON.parse(localStorage.getItem("pokedex"));
    }
    if(selectedPokemon in cache){
      setData(cache[selectedPokemon]);
      return;
    }
    async function fetchPokemonData(){ 
      try{
        const baseUrl="https://pokeapi.co/api/v2/"
        const suffix='pokemon/'+selectedPokemon
        const finaUrl=baseUrl+suffix
        const response = await fetch(finaUrl);
        const pokemonData=await response.json();
        setData(pokemonData);
        cache[selectedPokemon]=pokemonData
        localStorage.setItem("pokedex", JSON.stringify(cache));
      }
      catch(error){
        console.log(error.message);
      }
      finally{
        setLoading(false);
      }
    }
    fetchPokemonData();
  },[selectedPokemon]);
  return(
    <div>
      
    </div>
  );
}