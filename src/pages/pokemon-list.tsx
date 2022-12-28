import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../components/pokemon-card';
import PokemonSearch from '../components/pokemon-search';
import { usePokemons } from '../hooks/use-pokemon';
  
// ce composant affiche tous les pokemons sur l'accueil du site, il se sert du composant PokemonCard
const PokemonList: FunctionComponent = () => {
  const pokemons = usePokemons();
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  // useEffect(() => {
  //   setPokemons(POKEMONS);
  // }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row">
        <PokemonSearch /> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} /*borderColor='red'*/ />
        ))}
        </div>
        <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3 pulse"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to="/pokemon/add">
        <i className="material-icons">add</i>
      </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;