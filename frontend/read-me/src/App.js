import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login-component/login.component'
import SignUp from './components/signup-componet/signup.component'
import logo from './images/logo2.png'
import Home from './pages/Home';
import Profil from './pages/Profil';
import ReadPage from './pages/ReadPage';

function App() {
  return (

      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>

        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/read-page" element={<ReadPage />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>

      </div>
  )
}
export default App