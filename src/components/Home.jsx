import Navbar from "./Navbar"


const Home = () => {
    return (
        <div className="home min-h-screen" id="home">
            <Navbar />
            <div className="flex justify-around items-center ">
                <img 
                src="https://static.bhphoto.com/images/images2500x2500/1601479238_1595336.jpg" 
                alt="image of pixel" className="h-96 font-semibold"/>
                <div className="">
                    <h1 className="text-6xl font-bold">Project Lighthouse</h1>
                    <p className="text-2xl">Minimalistic custom rom</p>
                    <p className="text-2xl">With features, pixel goodies</p>
                    <p className="text-2xl">And latest security patches</p>
                </div>
            </div>
        </div>
    )
}

export default Home
