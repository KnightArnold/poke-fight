import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavigator from "./components/AppNavigator";
import Battle from "./containers/Battle";
import Pokefight from "./containers/Pokefight";
import PokemonDetails from "./containers/PokemonDetails";
import Ranking from "./containers/Ranking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AppNavigator /> 
      <Routes>               
        <Route exact path="/" element={<Pokefight/>} />
        <Route exact path="/ranking/" element={<Ranking/>} />
        <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
        <Route exact path="/battle/:idRankingSelected" element={<Battle />} />
      </Routes>
      <ToastContainer hideProgressBar />
    </Router>
    
  );
}

export default App;
