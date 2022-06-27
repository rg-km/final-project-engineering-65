import React from "react";
import { useState } from "react";
import DetailModal from "./Modals/DetailModal";
import { useNavigate } from "react-router-dom";
//import { Modal } from 'react-bootstrap';

function Card ({book}){
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)
    const [bookItem,setItem] = useState();
    const getDetail = () => {
        if (localStorage.getItem('token') != null) {
            setOpenModal(true)
        } else {
            navigate("/sign-in")
        }
    }

    return(
        <>
         {book.map((item,index)=>{
            return(
                <>
                <div className="card" onClick={() => {getDetail() ; setItem(item)}} key={index} >
                    <img src={item.cover} alt="" />
                    <div className="bottom">
                        <button className="pt-3 book-title">{item.judul}</button> 
                    </div>
                </div>
                {openModal && <DetailModal item={bookItem}  onClose={setOpenModal}/>}
                </>
            )})}
        </>
    )
}

export default Card;