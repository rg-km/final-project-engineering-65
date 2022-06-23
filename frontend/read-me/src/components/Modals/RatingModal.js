import React from "react";
import { FaStar } from "react-icons/fa";
import book1 from "../../assets/book1.jpg";
import './Modal.css';

const colors = {
    orange: "#ff8431",
    grey: "#788896"
}

function Rating({onClose}) {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = value => {
        setHoverValue(value);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> onClose(false)} className="close"> X </button>

                <div className="modalImage">
                    <img src={book1} alt=""/>
                </div>

                <div className="body">
                    <h5> WILL </h5>
                    <p> Nama Penulis </p>
                </div>
  
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return(
                            <FaStar 
                                key={index}
                                size={25}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )
                    })}
                </div>

                <textarea 
                    placeholder="Review Buku"
                    style={styles.textarea}
                />
                <button className="btn btn-outline-warning btn-rounded btn-sm my-0" id="submit" type="submit">Submit</button>
            </div>
        </div>
    )
}

const styles = {
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 340,
        padding: 10,
        margin: "20px, 0",
        minHeight: 115,
        marginTop: 30,
        marginBottom: 15,
    },
}

export default Rating;