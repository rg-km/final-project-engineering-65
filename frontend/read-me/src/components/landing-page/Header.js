import React from "react";
import {useEffect, useState} from "react";
import Navbar from "./Navbar";

function Header(){
    return(
        <div id="main">
            <Navbar/>

            {/* quote section */}
            <section className="pt-4 quote">
            <div className="container">
                <div className="row align-item-center" style={{ width: "360" }}>
                    <div className="col-auto pr-5">
                        <h1 className="font-weight-bold my-5">
                             "Quotes of The Day"
                        </h1>
                    </div>
                </div>
            </div>
            </section>

            {/* searchbar */}
            <div class="container search">
                <div class="d-flex justify-content-center">
                    <div class="searchbar">
                        <form class="form-inline md-form mr-auto mb-4">
                        <input class="search_input " type="text" name="" placeholder="CARI BUKU"/>
                        <button class="btn btn-outline-warning btn-rounded btn-sm my-0" id="src-button" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;