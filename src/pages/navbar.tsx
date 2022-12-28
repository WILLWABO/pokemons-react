import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// ce composant permet de dégérer l'affichage de l'entête de la page.
// target = _blanck permet d'ouvrir la page dans un nouvel onglet
// pour que les icones de réseaus sociaux s'affichent il faut importer des fichier dans l'index.html(fontawesome)
const Navbar: FunctionComponent = () => {
  
  return (
    <div>
       <nav  className="link-nav">
            <div className="nav-wrapper black">
            <Link to="/" className="brand-logo right">Pokédex</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="left hide-on-med-and-down">
                <li><a href="https://www.facebook.com" target="_blanck" style={{color: "blue"}}><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.twitter.com" target="_blanck" style={{color: "#00acee"}}><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com" target="_blanck" style={{color: "#d62976"}}><i className="fab fa-instagram"></i></a></li>
            </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><a href="https://www.facebook.com" target="_blanck" style={{color: "blue"}}><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com" target="_blanck" style={{color: "#00acee"}}><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com" target="_blanck" style={{color: "#d62976"}}><i className="fab fa-instagram"></i></a></li>
        </ul>
    </div>
  );
}
  
export default Navbar;