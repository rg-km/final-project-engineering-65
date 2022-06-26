import React from "react";
import './Modal.css';
import book1 from "../../assets/book1.jpg";
import logo2 from "../../assets/logo-footer.png";
import coint from "../../assets/coint.PNG";
import axios from 'axios';

function UnlockModal({onClose}){
    const profil = JSON.parse(localStorage.getItem('profil'))

    const tukarPoint = () => {
        axios.get(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`)
        .then((res) => {
            console.log(res)
            const resData = res.data
            if (resData.point >= 20) {
                axios.put(`https://62b638f842c6473c4b40ff48.mockapi.io/api/read-me/users/${profil?.id}`, {
                    ...resData, 
                    point: resData.point - 20
                })
                .then((resUpdate) => {
                    window.location.href = "/read-page"
                    localStorage.setItem('profil', JSON.stringify(resUpdate.data))
                })
                .catch((eUpdate) => {
                    console.log(eUpdate)
                })
            } else {
                alert('Point tidak cukup')
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }

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
                        <button type="submit" onClick={tukarPoint}>TUKAR POINT</button>
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