import React from "react";
import './Modal.css';
import book1 from "../../assets/book1.jpg";
import logo2 from "../../assets/logo-footer.png";
import coint from "../../assets/coint.PNG";

function UnlockModal({onClose}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>
                <div className="modalImage">
                    <img src={book1} alt=""/>
                </div>
                
                <div className="body">
                    <h5> Judul Buku </h5>
                    <h5 className="coint"><img src={coint} width={28} alt=""/> 20</h5>

                    <div className="buttonUnlock">
                        <button>TUKAR POINT</button>
                    </div>

                    <p> Nama Penulis Buku </p>
                    <p> Nama Penerbit </p>
                    <p> Tahun Terbit </p>
                </div>

                <div className="bookSynopsis">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex dui, a luctus sapien tempus et. Phasellus tincidunt purus sit amet massa congue, et suscipit odio pulvinar. Ut iaculis justo augue, ut lacinia lectus maximus luctus.</p>
                </div>
            </div>
        </div>
    )
}

export default UnlockModal