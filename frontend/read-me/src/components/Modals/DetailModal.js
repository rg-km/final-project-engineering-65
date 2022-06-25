import React from "react";
import './Modal.css';
import axios from "axios";
import book1 from "../../assets/book1.jpg";
import { useState, useEffect } from "react";
import logo2 from "../../assets/logo-footer.png";
import ReadPage from "../../pages/ReadPage";

function DetailModal({item, onClose}){

    let thumbnail = item.cover;
    const [bookPdf, setBookPdf] = useState();
    const readPage = () =>{ window.location.href='/read-page'}
    return(
        
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>
                <div className="modalImage">
                    <img src={thumbnail} alt=""/>
                </div>
                <div className="body">
                    <h5> {item.judul} </h5>
                    <p> {item.penulis} </p>
                    <p> {item.penerbit} </p>
                    <p> {item.tahun} </p>
                </div>
                <div className="buttonRead">
                    <button onClick={() => { setBookPdf(readPage)
                         && <ReadPage item={bookPdf}/>}}><img src={logo2} alt=""/></button>
                
                </div>
                <div className="bookSynopsis">
                    <p>{item.sinopsis}</p>
                </div>
            </div>
        </div>
            
       
    )
}

export default DetailModal

