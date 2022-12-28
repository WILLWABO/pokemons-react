import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from './loader';
// import POKEMONS from '../models/mock-pokemon';
 
const PokemonEdit: FunctionComponent = () => {
  const {id} = useParams();
  const [pokemon, setPokemon] = useState<Pokemon|undefined>();
  
  // useEffect(() => {
  //   POKEMONS.forEach(pokemon => {
  //     if (id === pokemon.id.toString()) {
  //       setPokemon(pokemon);
  //     }
  //   })
  // }, [id]);

  
  // cette fonction permet de mettre à jour l'état du composant. L'api Pokemonservice fournit une fonction getPokemon
  // qui prend en paramètre l'id du pokemon et retourne le pokemon mis à jour.
  // cette fonction gère le cycle de vie du composant. componemtDitMount, componentOnMount, componentDidUpdate


  useEffect(() => {
          // fetch(`http://localhost:3001/pokemons/${id}`)
          // .then(reponse =>reponse.json())
          // .then(pokemon =>{
          //   if (pokemon.id) setPokemon(pokemon);
          // });
          PokemonService.getPokemon(Number(id)).then(pokemon => setPokemon(pokemon));
        }, [id]);

  // si le pokemon existe, on affiche le formulaire d'édition. en un laps de temps le loader se charge d'abord
  // par défaut, on édite un pokemon. d'où la variable isEdition={{true}}
  // PokemonForm est un composant qui prend en paramètre deux variable: pokemon et isEditForm  
  return (
    <div>
      { pokemon ? (
        <div className="row">
            <h2 className="header center">Éditer { pokemon.name }</h2>
            <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;