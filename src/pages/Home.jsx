import React from 'react'
import LighthouseNavbar from '../components/LighthouseNavbar'
import Phone from '../components/Phone'
import { makeStyles,Grid } from "@material-ui/core";
import HomeText from '../components/HomeText';

const useStyles = makeStyles(theme =>({
    home: {
    },
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
        <div className={classes.home}>
            <LighthouseNavbar />
            <div>
                <Grid container>
                    <Grid item xs={12} sm={6} className={classes.homeText}>
                        <Phone />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.homeText}>
                        <HomeText />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home
