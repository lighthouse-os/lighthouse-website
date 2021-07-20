import Navbar from "../components/Navbar"
import { Button } from "@material-ui/core"
import { Link } from "react-scroll"

const Home = () => {
    return (
        
        <div className="home min-h-screen" id="home">
            <Navbar />
            <div className="flex flex-wrap justify-around items-center ">
                <img 
                src="https://static.bhphoto.com/images/images2500x2500/1601479238_1595336.jpg" 
                alt="image of pixel" className="outline-none h-auto font-semibold w-full md:w-1/2 lg:w-1/3"/>
                <div className="my-5 mx-6 lg:mx-0">
                    <h1 className="text-3xl lg:text-6xl font-bold m-6 text-gray-400">Project Lighthouse</h1>
                    <div className="ml-7 flex lg:block flex-col items-center">
                        <p className="text-xl lg:text-2xl">A Minimalistic Custom Rom</p>
                        <p className="text-xl lg:text-2xl">With Features, Pixel Goodies,</p>
                        <p className="text-xl lg:text-2xl">And Latest Security Patches</p>
                        <Link to="about" spy={true} duration={500} smooth={true} activeClass="active" offset={-70}>
                        <Button  variant="contained" color="primary" style={{marginTop: 20 }}>LEARN MORE</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
