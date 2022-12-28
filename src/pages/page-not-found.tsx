import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
// ce composant personnalise l'affichage d'une...
// page d'erreur au cas où l'on essaye d'acceder à une page qui n'existe.
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page non trouvée"/>
      <h1>Hey, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;