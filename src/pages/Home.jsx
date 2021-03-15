import React from 'react'
import LighthouseNavbar from '../components/LighthouseNavbar'
import Phone from '../components/Phone'
import { makeStyles } from "@material-ui/core";
import HomeText from '../components/HomeText';

const useStyles = makeStyles(theme =>({
    homeText:{
        display: "flex",
        justifyContent:"space-around",
        alignItems: "center"
    },
    navbar: {

    },
    phone: {

    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div className="home">
            <LighthouseNavbar />
            <div className={classes.homeText}>
                <Phone />
                <HomeText />
            </div>
        </div>
    )
}

export default Home
