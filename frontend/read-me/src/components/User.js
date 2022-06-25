import React from "react";
import 'antd/dist/antd.css';
import foto from "../assets/foto-profil.png";
import foto2 from "../assets/foto-profil-pria.png"
import coint from "../assets/coint.PNG";
import UnlockCard from "./UnlockCard";

function User() {
    const profil = JSON.parse(localStorage.getItem('profil'))

    return(
        <div id="main">
            <h2 className="title"> My Account </h2>
            <center><img src={profil?.jenis_kelamin?.toLowerCase() == 'perempuan'?foto:foto2} width={120} height={120} id="foto-profil" alt=""/></center>
            <h4 className="nama">{profil?.nama}</h4>

            <div id="point">
                <h4 className="point-2"><img src={coint} width={35} alt=""/> {profil?.point}</h4>
            </div>

            <h4 className="tukar">Tukarkan Points</h4>

            <div className="card-container">
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard />
                <UnlockCard /><br /><br />
            </div>
        </div>
    )
}

export default User;