import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavigator from "./components/AppNavigator";
import Pokefight from "./containers/Pokefight";

function App() {
  return (
    <Router>
      <AppNavigator /> 
      <Routes>               
        <Route path="/" element={<Pokefight/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
