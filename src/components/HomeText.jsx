import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    textHeader: {
        paddingBottom: "56px",
    }
}))

const HomeText = () => {
    const classes = useStyles();
    return (
        <div className="home-text">
            <div className={classes.header}>
                <Typography variant="h2" className={classes.textHeader}>Project Lighthouse</Typography>
            </div>
            <div className={classes.text}>
                <Typography variant="h6">An Open Source Project </Typography>
                <Typography variant="h6">Primarily focused towards providing</Typography>
                <Typography variant="h6">User experience close to pixel and </Typography>
                <Typography variant="h6">Providing minimal customisations.</Typography>
            </div>
        </div>
    )
}

export default HomeText
