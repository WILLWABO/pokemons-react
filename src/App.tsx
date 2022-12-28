import React, {FunctionComponent, useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
import PokemonEdit from './components/pokemon-edit';
import Login from './pages/login';
import PageNotFound from './pages/page-not-found';
import PokemonAdd from './pages/pokemon-add';
import PokemonsDetail from './pages/pokemon-detail';
// import POKEMONS from './models/mock-pokemon';
// import Pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';
import PrivateRoute from './PrivateRoute';
import './App.css'
import Footer from './pages/footer';
import Navbar from './pages/navbar';
  
const App: FunctionComponent = () => {
//  const [name, setName] = useState<String>('Will')
//  const [pokemons, setPokemons]  = useState<Pokemon[]>([])
//  const [pokemons, setPokemons]  = useState<Pokemon[]>(POKEMONS)

//  useEffect(() =>{
//     setPokemons(POKEMONS);
//  },[])
    
 return (
    <Router>
        <div>
        <Navbar/>
        <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute/>}>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemons" element={<PokemonList />} />
                <Route path='pokemon/add' element={<PokemonAdd/>} />
                <Route path="/pokemons/:id" element={<PokemonsDetail/>} />
                <Route path='pokemons/edit/:id' element={<PokemonEdit/>} />
            </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>   

        /* <PokemonList />  */
        /* <h1 className='center'>Pokédex</h1> */
        /* <div className='container'>
            <div className='row'>
                {pokemons.map(({id, name, picture, created}) =>(
                    <div className='col s6 m4' key={id}>
                        <div className='card horizontal'>
                            <div className='card-image'>
                                <img src={picture} alt={name} />
                            </div>
                            <div className='card-stacked'>
                                <div className='card-content'>
                                    <p>{name}</p>
                                    <p><small>{created.toString()}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */
        /* <ul>
            {pokemons.map(pokemon =>(<li>{pokemon.name}</li>))}
        </ul>
        <ol>
            {pokemons.map(({name}) =>(<li>{name}</li>))}
        </ol>
        <p>Nombre de pokemons: {pokemons.length}</p> */
        /* </div> */

 )
}
  
export default App;