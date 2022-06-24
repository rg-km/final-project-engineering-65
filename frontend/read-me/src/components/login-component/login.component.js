import React, { Component } from 'react'
import image2 from '../../images/read-books.png'
import logo from '../../images/logo2.png'
// import images from '../images/pass.png'
// import image from '../images/mail.png'
export default class Login extends Component {
  render() {
    return (
      <>
      <div className='container kotak'>
          <div className='row'>
              <div className='col-12 ps-1 pt-2'>
                  <img src={logo} width="150" />
              </div>
          </div>
      
      <div className='row d-flex pt-5 justify-content-center'>
      <div className='col-5 pt-5'>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form className='formlogin'>
              {/* <h5 className='title_u'></h5> */}
              <h3 className='mb-2'>Log In</h3>
              <h6 className='mb-4 text-dark'>Belum ada akun? <a href='/sign-up'>Daftar</a></h6>
              <div className="mb-4">
                <input
                  type="text"
                  className="mail Input"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="password"
                  placeholder="Password"
                />
              </div>
              
              {/* <div className="mb-3"> */}
              <div className='d-flex justify-content-end'>
                {/* <div className="custom-control custom-checkbox form-check form-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input form-check-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Show Password
                  </label>
                </div> */}
                {/* </div> */}
                {/* <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
              </div> */}
                <div className="d-grid">
                  <button type="login" className="btn btn-success px-4">
                    Login
                  </button>
                </div>
                {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p> */}
              </div>
            </form >
          </div>
        </div>
        {/* </div> */}

        </div>
        <div className='col-7 pt-2 login-kanan' style={{overflow:'hidden'}}>
          <img src={image2} className="login-kanan" width="auto" height="auto" />
        </div>

      </div>
      </div>
      </>
    )
  }
}