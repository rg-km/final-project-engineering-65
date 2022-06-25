import React from "react";
import { useState } from "react";
import DetailModal from "./Modals/DetailModal";
//import { Modal } from 'react-bootstrap';


function Card ({book}){
    const [openModal, setOpenModal] = useState(false)
    const [bookItem,setItem] = useState();

    return(
        <>
         {book.map((item,index)=>{
            return(
                <>
                <div className="card" onClick={() => {setOpenModal(true); setItem(item)}} key={index} >
                    <img src={item.cover} alt="" />
                    <div className="bottom">
                        <button className="book-title">{item.judul}</button> 
                    </div>
                </div>
                {openModal && <DetailModal item={bookItem}  onClose={setOpenModal}/>}
                </>
            )})}
        </>
    )
}

export default Card;