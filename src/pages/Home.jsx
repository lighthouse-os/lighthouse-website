import Navbar from "../components/Navbar"


const Home = () => {
    return (
        <div className="home min-h-screen" id="home">
            <Navbar />
            <div className="flex flex-wrap justify-around items-center ">
                <img 
                src="https://static.bhphoto.com/images/images2500x2500/1601479238_1595336.jpg" 
                alt="image of pixel" className="h-auto font-semibold w-full md:w-1/2 lg:w-1/3"/>
                <div className="">
                    <h1 className="text-6xl font-bold m-6 text-gray-400">Project Lighthouse</h1>
                    <p className="text-2xl text-center">Minimalistic custom rom</p>
                    <p className="text-2xl text-center">With features, pixel goodies</p>
                    <p className="text-2xl text-center">And latest security patches</p>
                </div>
            </div>
        </div>
    )
}

export default Home
