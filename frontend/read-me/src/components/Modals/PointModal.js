import React from "react";
import './PointModal.css';
// import book1 from "../../assets/book1.jpg";
import logo from "../../images/10 point.png";

function PointModal({onClose}){
    return(
        <div className="modalBackground">
            <div className="p-modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>
                {/* <div className="modalImage">
                    <img src={book1} alt=""/>
                </div> */}
                <div className="p-body">
                    <h1> Congratulations </h1>
                    <img src={logo} width="200px" />
                    {/* <p> Nama Penulis Buku </p> */}
                    <h5> Mari Membaca Lebih Banyak! </h5>
                    {/* <p> Tahun Terbit </p> */}
                </div>
                <div className="p-buttonRead">
                    <button>NEXT</button>
                </div>
                {/* <div className="bookSynopsis">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ex dui, a luctus sapien tempus et. Phasellus tincidunt purus sit amet massa congue, et suscipit odio pulvinar. Ut iaculis justo augue, ut lacinia lectus maximus luctus. Orci varius natoque penatibus et magnis dis parturient montes.</p>
                </div> */}
            </div>
        </div>
    )
}

export default PointModal

