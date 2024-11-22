import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavigator from "./components/AppNavigator";
import Battle from "./containers/Battle";
import Pokefight from "./containers/Pokefight";
import PokemonDetails from "./containers/PokemonDetails";
import Ranking from "./containers/Ranking";

function App() {
  return (
    <Router>
      <AppNavigator /> 
      <Routes>               
        <Route exact path="/" element={<Pokefight/>} />
        <Route exact path="/ranking/" element={<Ranking/>} />
        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
        <Route exact path="/battle/" element={<Battle />} />
      </Routes>
    </Router>
    
  );
}

export default App;
