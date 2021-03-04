import HomepageHead from "../components/HomepageHead";
import Phone from "../components/Phone"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
    return ( 
        <div>
            <Navbar/>
        <div className="home-page container">
            <div className="row">
                <div className="col-sm-7">
                    <HomepageHead />
                </div>
                <div className="col-sm-5">
                    <Phone className="phone"/>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
     );
}
 
export default Homepage;