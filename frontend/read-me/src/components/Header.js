import React from "react";
import Card from "./Card";
import Category from "./Category";
import { RandomQuote } from "./RandomQuote";



function Header(){
    
    return(
        <div id="main">

            {/* quote section */}
            <section className="pt-4 quote">
            <RandomQuote/>
            </section>

            {/* searchbar */}
            <div className="container search">
                <div className="d-flex justify-content-center">
                    <div className="searchbar">
                        <form className="form-inline md-form mr-auto mb-4">
                        <input className="search_input " type="text" name="" placeholder="CARI BUKU"/>
                        <button className="btn btn-outline-warning btn-rounded btn-sm my-0" id="src-button" type="submit">Search</button>
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
                <h2 className="info-2">10 Books in 5 Categories</h2>
                <button type="button" className="btn" id="seeCtg">See All</button>
            </div>

            <div className="card-container">
                <Category/><br></br>
            </div>

        </div>
    )
}
export default Header;