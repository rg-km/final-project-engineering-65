import React from "react";
import 'antd/dist/antd.css';
import foto from "../assets/foto-profil.png";
import coint from "../assets/coint.PNG";
import UnlockCard from "./UnlockCard";

function User() {
    return(
        <div id="main">
            <h2 className="title"> My Account </h2>
            <center><img src={foto} width={120} height={120} id="foto-profil" alt=""/></center>
            <h4 className="nama">NISA ALIVIA</h4>

            <div id="point">
                <h4 className="point-2"><img src={coint} width={35} alt=""/> 100</h4>
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