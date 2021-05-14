import DownloadCard from "../components/DownloadCard"
import lighthouse from '../lighthouse.png'

const Downloads = () => {

    const devices = [
        {
            name: "Redmi Note 7 Pro",
            codename: "violet",
            downloadURL: "#",

        }
    ]

    return (
        <div className="h-auto lg:h-screen lg:flex" id="downloads">
            <div className="w-full lg:w-1/2 bg-gray-700 h-auto lg:h-full flex flex-col justify-center items-center">
                <img src={lighthouse} className="h-1/5 w-1/4 my-4" />
                <h1 className="text-center text-white text-2xl lg:text-6xl font-semibold my-4">Downloads</h1>
            </div>
            <div className='flex flex-wrap justify-center w-full'>
                <DownloadCard />
                <DownloadCard />
                <DownloadCard />
                <DownloadCard />
                
            </div>
        </div>
    )
}

export default Downloads;
