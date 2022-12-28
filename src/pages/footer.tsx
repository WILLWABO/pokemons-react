import { FunctionComponent } from 'react';
 
// ce composant permet de gérer l'affichage du bas de page
const Footer: FunctionComponent = () => {
  
  return (
    <div >
      <footer className="page-footer" style={{position:'fixed', bottom:0, left:0, textAlign:'center', width:'100%', background: 'black'}} >
            © 2023 Copyright WILLWABO
        </footer>
    </div>
  );
}
  
export default Footer;