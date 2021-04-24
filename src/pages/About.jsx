import './About.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const About = () => {
    
    return (
        <div className="about">
            <h1>Shots</h1>
            <AliceCarousel 
            mouseTracking
            className="carousel"
            autoPlay 
            autoPlayInterval="3000"
            fadeOutAnimation={true}
            >
                <img className="sliderimg" src="https://cdn.vox-cdn.com/thumbor/xfe1lVJvas6KeOsZ0WPwUUeoaGM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21926952/Screenshot_20200930_163152.png" alt=""/>
                <img className="sliderimg" src="https://cdn.vox-cdn.com/thumbor/xfe1lVJvas6KeOsZ0WPwUUeoaGM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21926952/Screenshot_20200930_163152.png" alt=""/>
                <img className="sliderimg" src="https://cdn.vox-cdn.com/thumbor/xfe1lVJvas6KeOsZ0WPwUUeoaGM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21926952/Screenshot_20200930_163152.png" alt=""/>
            </AliceCarousel>
        </div>
    )
}

export default About
