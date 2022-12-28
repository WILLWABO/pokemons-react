import { useEffect, useState } from "react";
// import POKEMONS from "../models/mock-pokemon";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";

// ce composant permet de récuperer les pokémons depuis... 
// un serveur et les mets dans un tableau pokemons de type Pokemon qui est vide initialement. 

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    // useEffect(() => {
    //   setPokemons(POKEMONS);
    // }, []);
    
    useEffect(() => {
      PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
      // fetch('http://localhost:3001/pokemons')
      // .then(reponse =>reponse.json())
      // .then((pokemons) =>{
      //   setPokemons(pokemons)
      // });
    }, []);

    return pokemons;
}