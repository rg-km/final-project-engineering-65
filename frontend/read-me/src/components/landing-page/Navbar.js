import React from "react";
import {useEffect, useState} from "react";
import logo2 from "./logo2.png";

function Navbar(){
    return(
        <nav className="">
            <p></p>
            <a href="#" className="logo">
                <img src={logo2} alt=""/>
            </a>
            <button type="button" className="btn" id="login">Login</button>
        </nav>
    )
}
export default Navbar;