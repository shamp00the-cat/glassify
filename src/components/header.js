import {Link} from "react-router-dom";
import search from "../img/search.png";
import logoL from "../img/logo-expanded.png";

const Header = () => {
    return (
        <header>
            <Navbar>
                <NavItem path="/collection/" text="BROWSE"/>            
                <NavItem path="/add-yours" text="ADD YOURS"/>
                <NavItem path="/about-us" text="ABOUT" />
            </Navbar>
            <Link className="home" to="/"><img src={logoL} alt="Glassify Glass Catalog" /></Link>
            <form className="search">
                <input className="search-input" type="text" id="search" name="search" placeholder="Search..."/>
                <button className="search-button" type="submit" value="Search"><img src={search} alt="Search Icon"/></button>
            </form>
        </header>
    );
}

function Navbar(props) {
    return (
        <nav>
            <ul id="primary-nav" className="nav-items">{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {
    return (
        <li className="nav-item">
            <Link to={props.path}>
                <p>{props.text}</p>
            </Link>
        </li>
    )
}

export default Header;