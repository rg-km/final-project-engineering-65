import React from "react";
import book2 from "../assets/book2.jpg";
import { useState } from "react";
import UnlockModal from "./Modals/UnlockModal";

function Unlock (){
    const [openModal, setOpenModal] = useState(false)
    return(
        <>
            <div className="card" onClick={() => setOpenModal(true)}>
                <img src={book2} alt=""/>
                <div className="bottom">
                    <h3 className="book-title">Will</h3>
                    <button className="btn btn-outline-warning btn-rounded btn-sm my-0" id="unlock-button" type="submit">Unlock</button>
                </div>
            </div>
            {openModal && <UnlockModal onClose={setOpenModal}/>}
        </>
    )
}

export default Unlock;