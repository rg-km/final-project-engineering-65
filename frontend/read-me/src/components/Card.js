import React from "react";
import book1 from "../assets/book1.jpg";

function Card (){
    return(
        <div className="card">
            <img src={book1} alt=""/>
            <div className="bottom">
                <h3 className="book-title">Will</h3>
            </div>
        </div>
    )
}

export default Card;