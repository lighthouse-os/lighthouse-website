import DeveloperCard from "../components/DeveloperCard";

const Developers = () => {
    return ( 
        <div className="developers container">
                <div className="developers__title">
                    <h1>Developers</h1>
                </div>
            <div className="devRow">
                <DeveloperCard name="Vyom Desai" who="CannedShroud" image="https://avatars.githubusercontent.com/u/52405504?s=460&u=cbd8fdb7416c18f261b4109fc1b1672482c7ec0d&v=4" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <DeveloperCard name="Shourya Sharma" who="Galenteria01" image="https://avatars.githubusercontent.com/u/58800160?s=460&u=a4642596aca6664797bce5a52b7176fe90c9936a&v=4" content="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <DeveloperCard name="Rishwan Iyer" who="Stealth1226" image="https://avatars.githubusercontent.com/u/70256146?s=460&u=15eba7ed8610fd1842f4f3e6695dec080a1f87cd&v=4" content="ome quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
        </div>
     );
}
 
export default Developers;