import './App.css';
import Nav from './componets/Nav/Nav';
import PrincipalPage from './componets/LandingPage/PrincipalPage';
import Home from './componets/Home/Home';
import PokemonDetail from './componets/PokemonDetail/PokemonDetail';
import PokemonCreate from './componets/PokemonCreate/PokemonCreate';
import About from './componets/About/About';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Route exact path= "/" component={PrincipalPage}/>
       <Route path="/pokemons" component={Nav}/>
       <Route exact path="/pokemons" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/pokemonCreate" component={PokemonCreate}/>
       <Route exact path="/pokemons/pokemonDetail/:id" component={PokemonDetail}/>
     </div>
    </BrowserRouter>
  );
}

export default App;
