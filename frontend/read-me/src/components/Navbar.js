import React from "react";
import logo2 from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
    return(
        <nav className="">
            <p></p>
            <a href="#" className="logo">
                <img src={logo2} alt=""/>
            </a>
            <button type="button" className="btn" id="login" onClick={() => navigate("/sign-in")}>Login</button>
        </nav>
    )
}
export default Navbar;