import React, { useState, Component, setDate } from 'react'
import logo from '../../images/logo2.png'

export default class SignUp extends Component {
    render() {

        function Registration(){
            const [date, setDate]=useState();
        }
        return (
            <>
            <div className='container kotak'>
                <div className='row'>
                    <div className='col-12 ps-1 pt-2'>
                        <img src={logo} width="150" />
                    </div>
                </div>

                <div className='row d-flex pt-5 justify-content-center'>
                <div className='col-9'>
                <form className="formlogin Buat Akun ">
                    {/* <h5 className='title_u'></h5> */}
                    <h3 className='mb-2'>Buat Akun</h3>
                    {/* <h6 className='mb-4 text-dark'>sudah ada akun? <a href='/sign-in'>login</a></h6> */}
                    <div className="mb-4">
                        {/* <label>Email</label> */}
                        <input
                            type="email"
                            className="mail"
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
                    <div className="mb-4">
                        {/* <label>Konfimasi Password</label> */}
                        <input
                            type="password"
                            className="password "
                            placeholder="Konfimasi Password"
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label>Nama Lengkap</label> */}
                        <input
                            type="nama lengkap"
                            className="user"
                            placeholder="Nama Lengkap"
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label>Tempat,Tanggal Lahir</label> */}
                        <input
                            type="date"
                            onChange={e=>setDate(e.target.value)}
                            className="date"
                            placeholder="Tempat,Tanggal Lahir"
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label>Jenis Kelamin</label> */}
                        <input
                            type="jenis kelamin"
                            className="gender jenis kelamin"
                            placeholder="Jenis Kelamin"
                        />
                    </div>

                    {/*  <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <label>Konfirmasi Password</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Konfrimasi Password"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="Nama Lengkap"
                            className="form-control"
                            placeholder="Nama Lengkap"
                        />
                    </div> */}
                    <div className="d-flex justify-content-end align-items-center mb-4">
                        <h6 className="forgot-password pt-2 pe-4">
                            Sudah ada akun? <a href="/sign-in" id="link">Log in</a>
                        </h6>
                        <button type="login" className="btn btn-success px-4">
                            Daftar
                        </button>
                    </div>
                </form>
                </div>
                </div>
            </div>
            </>
        )
    }
}