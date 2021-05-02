import lighthouse from '../lighthouse.svg'

const Navbar = () => {
    return (
        <div className="navbar flex justify-between">
            <img src={lighthouse} className="h-16 m-6"/>
            <ul className="flex m-6">
                <li><a href="#home" className="m-3 text-xl hover:text-indigo-700 font-semibold ">Home</a></li>
                <li><a href="#" className="m-3 text-xl hover:text-indigo-700 font-semibold">About</a></li>
                <li><a href="#team" className="m-3 text-xl hover:text-indigo-700 font-semibold">Team</a></li>
                <li><a href="#" className="m-3 text-xl hover:text-indigo-700 font-semibold">Downloads</a></li>
            </ul>
        </div>
    )
}

export default Navbar
