import DownloadCard from "../components/DownloadCard"
import lighthouse from '../lighthouse.png'

const Downloads = () => {
    return (
        <div className="h-screen lg:flex">
            <div className="w-full lg:w-1/2 bg-gray-700 h-auto lg:h-full flex flex-col justify-center items-center">
                <img src={lighthouse} className="h-1/5 w-1/4 my-4" />
                <h1 className="text-center text-white text-2xl lg:text-6xl font-semibold my-4">Downloads</h1>
            </div>
            <div className='flex flex-wrap justify-start w-full'>
                <DownloadCard />
                <DownloadCard />
                <DownloadCard />
                
            </div>
        </div>
    )
}

export default Downloads;
