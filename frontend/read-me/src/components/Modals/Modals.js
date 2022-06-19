import React from "react";
import './Modal.css';
import book1 from "../../assets/book1.jpg";
import logo2 from "../../assets/logo-footer.png";

function Modal({onClose}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>
                <div className="modalImage">
                    <img src={book1} alt=""/>
                </div>
                <div className="body">
                    <h5> Judul Buku </h5>
                    <p> Nama Penulis Buku </p>
                    <p> Nama Penerbit </p>
                    <p> Tahun Terbit </p>
                </div>
                <div className="buttonRead">
                    <button><img src={logo2} alt=""/></button>
                </div>
                <div className="bookSynopsis">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex dui, a luctus sapien tempus et. Phasellus tincidunt purus sit amet massa congue, et suscipit odio pulvinar. Ut iaculis justo augue, ut lacinia lectus maximus luctus. Orci varius natoque penatibus et magnis dis parturient montes.</p>
                </div>
            </div>
        </div>
    )
}

export default Modal