import {Link} from "react-router-dom";
import logoLW from "../img/logo-expanded-white.png";

const Footer = () => {
    return (
        <footer>
            <Link to="/"><img src={logoLW} alt="Glassify Glass Catalog" /></Link>
            <p>&#169; 2023 Glassify Glass Catalog All rights reserved.</p>
        </footer>
    );
}

export default Footer