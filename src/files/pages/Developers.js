import { Nav } from "react-bootstrap";
import DeveloperCard from "../components/DeveloperCard";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const Developers = () => {
    return ( 
        <div>
            <Navbar/>
        <div className="developers container">
                <div className="developers__title">
                    <h1>The Lighthouse Keepers</h1>
                </div>
            <div className="devRow">
                <DeveloperCard name="Vyom Desai" who="CannedShroud" image="https://avatars.githubusercontent.com/u/52405504?s=460&u=cbd8fdb7416c18f261b4109fc1b1672482c7ec0d&v=4" post="Source Manager," content="The guy to spam for bugfixes."/>
                <DeveloperCard name="Shourya Sharma" who="Galenteria01" image="https://avatars.githubusercontent.com/u/58800160?s=460&u=a4642596aca6664797bce5a52b7176fe90c9936a&v=4" post="Project Manager," content="Warm hugs only."/>
                <DeveloperCard name="Rishawn Iyer" who="Stealth1226" image="https://avatars.githubusercontent.com/u/70256146?s=460&u=15eba7ed8610fd1842f4f3e6695dec080a1f87cd&v=4" post="Stealthy," content="The kid with insane ideas."/>
            </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Developers;