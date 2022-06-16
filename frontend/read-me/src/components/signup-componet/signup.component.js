import React, { Component } from 'react'
export default class SignUp extends Component {
    render() {
        return (
            <>
            <div className='col-9'>
            <form className="formlogin Buat Akun ">
                {/* <h5 className='title_u'></h5> */}
                <h3 className='mb-2'>Buat Akun</h3>
                {/* <h6 className='mb-4 text-dark'>sudah ada akun? <a href='/sign-in'>login</a></h6> */}
                <div className="mb-4">
                    {/* <label>Email</label> */}
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
                <div className="mb-4">
                    {/* <label>Konfimasi Password</label> */}
                    <input
                        type="password"
                        className="konfirmasi password form-control"
                        placeholder="Konfimasi Password"
                    />
                </div>
                <div className="mb-4">
                    {/* <label>Nama Lengkap</label> */}
                    <input
                        type="nama lengkap"
                        className="user nama lengkap form-control"
                        placeholder="Nama Lengkap"
                    />
                </div>
                <div className="mb-4">
                    {/* <label>Tempat,Tanggal Lahir</label> */}
                    <input
                        type="tempat,tanggal lahir"
                        className="date tempat,tanggal lahir hp form-control"
                        placeholder="Tempat,Tanggal Lahir"
                    />
                </div>
                <div className="mb-4">
                    {/* <label>Jenis Kelamin</label> */}
                    <input
                        type="jenis kelamin"
                        className="gender jenis kelamin form-control"
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
                <div className="d-flex justify-content-end align-items-center">
                    <h6 className="forgot-password pt-2 pe-4">
                        sudah ada akun? <a href="/sign-in">log in</a>
                    </h6>
                    <button type="login" className="btn btn-success px-4">
                        Daftar
                    </button>
                </div>
            </form>
            </div>
            </>
        )
    }
}