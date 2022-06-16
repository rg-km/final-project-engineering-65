import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login-component/login.component'
import SignUp from './components/signup-componet/signup.component'
import logo from './images/logo2.png'
function App() {
  return (
    <Router>
      <div className='container kotak'>
        <div className='row'>
          <div className='col-12 ps-1 pt-5'>
            <img src={logo} width="150" />
          </div>
        </div>
        <div className='row d-flex pt-5 justify-content-center'>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div >
      </div>
    </Router >
  )
}
export default App