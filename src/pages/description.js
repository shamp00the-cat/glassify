import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Description = () => {
    const location = useLocation()
    const { pieceId } = location.state;
    const [piece, setPiece] = useState("");

    function getPiece() {
        axios.get("https://swiss1.hunter.cuny.edu/students/dev4/build/api/getPiece.php", {params: { pieceId: pieceId}}).then(function(response) {
            setPiece(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getPiece();
    }, []);
    return (
        <main>
            {piece && piece?.map((info, i) => (
                <div key={i} className="products-page">
                    <div className="product-description">
                        <div id="left">
                            <div className='product-img-container'>
                                <img className="product-img" src={info.image} alt={info.maker_name}/>
                            </div>
                        </div>
                        <div id="right">
                            <h3>{info.maker.toUpperCase()}</h3>
                            <h1>{info.maker_name}</h1>
                            <p className="info-code">{info.code}</p>
                            <div className="details">
                                <p className="section">Color:</p>
                                <p>{info.color}</p>
                                <p className="section">Description:</p>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Description;