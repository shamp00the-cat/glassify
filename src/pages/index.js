import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <div className="home-container">
               <Link to="/collection/">
                <button className="see-all home-button">
                    <div className="button-bg"></div><span>BROWSE</span></button>
                </Link> 
            </div>
        </main>
    )
}

export default Home;