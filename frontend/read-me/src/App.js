import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profil from './pages/Profil';
import RatingModal from './components/Modals/RatingModal';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
  );
}

export default App;
