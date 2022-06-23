import React from "react";
import logo2 from "../assets/logo2.png";
import menu from "../assets/bars-solid.svg";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Navbar(){
    return(
        <nav id="navbar">
            <a href="#" className="logo">
                <img src={logo2} alt=""/>
            </a>
            <p></p>
            <Dropdown>
                <Dropdown.Toggle className="d-block" id="dropdown">
                    <img src={menu} class="menu-burger" alt=""/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/profil">My Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    )
}

export default Navbar;