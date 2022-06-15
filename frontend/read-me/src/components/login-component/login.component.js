import React, { Component } from 'react'
// import images from '../images/pass.png'
// import image from '../images/mail.png'
export default class Login extends Component {
  render() {
    return (
      <form className='formlogin'>
        <h5 className='title_u'></h5>
        <h3 className='mb-2'>Log In</h3>
        <h6 className='mb-4 text-dark'>belum ada akun? <a href='./components/signup.component.js'>daftar</a></h6>
        <div className="mb-4">
          {/* <img src={images} width="30" /> */}
          {/* <img src={image} width="30" /> */}
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="mail form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="password form-control"
            placeholder="Password"
          />
        </div>
        {/* <div className="mb-3"> */}
        <div className='d-flex justify-content-between'>
          <div className="custom-control custom-checkbox form-check form-switch">
            <input
              type="checkbox"
              className="custom-control-input form-check-input"
              id="customCheck1"
            />
            {/* <label className="custom-control-label" htmlFor="customCheck1">
              Show Password
            </label> */}
          </div>
          {/* </div> */}
          {/* <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div> */}
          <div className="d-grid">
            <button type="login" className="btn btn-success">
              login
            </button>
          </div>
          {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
        </div>
      </form >
    )
  }
}