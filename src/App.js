import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavigator from "./components/AppNavigator";
import Pokefight from "./containers/Pokefight";
import PokemonDetails from "./containers/PokemonDetails";

function App() {
  return (
    <Router>
      <AppNavigator /> 
      <Routes>               
        <Route exact path="/" element={<Pokefight/>} />
        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
    
  );
}

export default App;
