import {Link} from "react-router-dom";

function ProductCard(piece) {
    return (
        <Link className="product-card" to={`/piece/${piece.piece.id}`} state={{pieceId: piece.piece?.id}}>
            <div className="image-container"><img src={piece.piece.image} alt={piece.piece.maker_name}/></div>
            <div className="name-container">
                <p className="brand">{piece.piece.maker?.toUpperCase()}</p>
                <p className="name">{piece.piece.maker_name}</p>
                <p className="code">{piece.piece.code}</p>
                <p className="color">{piece.piece.color}</p>
            </div>
        </Link>
    );
}

export default ProductCard;