import { FunctionComponent, useState} from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';

// ce composant permet d'ajouter un nouveau pokemon.
const PokemonAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime()); // ici on génère un identifiant unique
    const [pokemon] = useState<Pokemon>(new Pokemon(id)); // on crée un pokémon vierge avec l'identifiant crée précedemment.
  return (
    <div>
        <div className="row">
            <h2 className="header center">Ajouter un pokemon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>  {/* isEditForm est une variable qui permet d'étider par défaut un pokemon, lorsqu'il est à false on crée plutôt un nouveau pokemon*/}
        </div>
    </div>
  );
}
  
export default PokemonAdd;