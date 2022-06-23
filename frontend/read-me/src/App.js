import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profil from './pages/Profil';
import ReadPage from './pages/ReadPage';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/read-page" element={<ReadPage />} />
        </Routes>

        <Routes>
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
  );
}

export default App;
