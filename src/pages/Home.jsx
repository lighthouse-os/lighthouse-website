import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";
import Nav from "../components/Nav"
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home__body">
                <HomeLeft />
                <HomeRight />
            </div>
        </div>
    )
}

export default Home
