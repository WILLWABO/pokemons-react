import { FunctionComponent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { formatDate } from '../helpers/format-date';
import { formatType } from '../helpers/format-type';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

// on déclare un nouveau type appélé Props afin de doter notre composant de cette
// nouvelle propriété, il faut noter que la borderColor est facultative lors de l'appel du composant. 
type Props = {
  pokemon: Pokemon,
  borderColor?: string
};
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {
  const [color, setColor] = useState<string>(); 

  // lorsque la souris est sur le pokemon, cette couleur de bordure est affichée(le vert="#009688").
  const showBorder = () =>{
    setColor(borderColor);
  }

  // lorsque la souris quitte le pokemon, cette couleur de bordure est affichée(le gris ="#f5f5f5").
  const hideBorder = () =>{
    setColor('#f5f5f5');
  }

  // cette fonctionn gère la navigation vers les détails d'un seul 
  //pokemon et prend en paramètre l'id du pokemon.
  const navigate = useNavigate();
  const goToPokemon = (id:number)=>{
    navigate(`/pokemons/${id}`)
  }
  
  // rendu du DOM virtuel avec un affichage plus sympatique de la date de création du pokemon.
  
  // association des couleurs à chaque type de pokemon.

  // card horizontal ou vertical permet de disposer les éléments 
  //horizontalement ou verticalement dans la carte, par défaut c'est vertical

  return (
    <div className="col s6 m4" onClick={() =>goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave = {hideBorder}>
      <div className="card horizontal" style ={{borderColor: color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content green-text">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map((type) =>(
              <span key={type} className ={formatType(type)}>{type}</span>
            ))}
            {/* <p><small>{pokemon.created.toString()}</small></p> */} 
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;