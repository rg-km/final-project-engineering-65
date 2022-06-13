import React from "react";
import {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Category from "./Category";
import Footer from "./Footer";


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

            <h2 className="info"> Newly Added Books </h2>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="ctg">
                <p></p>
                <h2 className="info-2">100 Books in 5 Categories</h2>
                <button type="button" className="btn" id="seeCtg">See All</button>
            </div>

            <div className="card-container">
                <Category/><br></br>
            </div>

            <Footer/>
        </div>
    )
}
export default Header;