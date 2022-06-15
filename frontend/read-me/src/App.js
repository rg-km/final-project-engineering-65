import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login-component/login.component'
import SignUp from './components/signup-componet/signup.component'
import image2 from './images/read-books.png'
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
        <div className='row d-flex kotak2'>
          <div className='col-5'>
            {/* <div className=""> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                {/* <Link className="navbar-brand judul" to={'/sign-in'}>
                  Read Me
                </Link> */}
                {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-in'}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/sign-up'}>
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </nav>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route path="/sign-in" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                </Routes>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className='col-7 login-kanan'>
            <img src={image2} width="390" height="390" />
          </div>
        </div >
      </div>
    </Router >
  )
}
export default App