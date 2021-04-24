import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__brand">
                <img src="https://img.icons8.com/cotton/2x/lighthouse--v5.png" alt="lighthouse header image"/>  
            </div>
            <div className="nav__links">
                <h3><a href="#" className="nav__link">Home</a></h3>
                <h3><a href="#" className="nav__link">About</a></h3>
                <h3><a href="#" className="nav__link">Team</a></h3>
                <h3><a href="#" className="nav__link">Downloads</a></h3>
                <a className="nav__button" href="https://paypal.me/galanteria01">Support</a>
            </div>
            
        </div>
    )
}

export default Nav
