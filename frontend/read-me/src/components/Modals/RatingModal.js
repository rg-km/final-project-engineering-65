import React from "react";
import { FaStar } from "react-icons/fa";
import book1 from "../../assets/book1.jpg";

const colors = {
    orange: "#ff8431",
    grey: "#788896"
}

function Rating() {
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
        <div style={styles.container}>
            <img src={book1} alt="" height={200} />
            <h4 className="nama">WILL</h4>
            <p>Nama Penulis</p>

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
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40,
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 400,
        padding: 10,
        margin: "20px, 0",
        minHeight: 110,
        marginTop: 30,
        marginBottom: 20,
    },
}

export default Rating;