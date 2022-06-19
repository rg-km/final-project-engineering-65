import React from "react";
import { useState } from "react";
import book1 from "../assets/book1.jpg";
import Modals from "./Modals/Modals";
//import { Modal } from 'react-bootstrap';


function Card (){
    const [openModal, setOpenModal] = useState(false)
    return(
        <>
        <div className="card" >
            <img src={book1} alt=""/>
            <div className="bottom">
                <button className="book-title" onClick={() => setOpenModal(true)}>Will</button> 
                {openModal && <Modals onClose={setOpenModal}/>}
            </div>
        </div>
        {/* <Modals openModal={openModal} onClose={() => setOpenModal(false)}/> */}
        </>
    )
}

export default Card;