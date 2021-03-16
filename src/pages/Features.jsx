import { makeStyles,Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    features: {
        height:"100vh",
        
    },
    featuresHeader: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        display: "flex",
        justifyContent:"center",
    }
}));

const Features = () => {
    const classes = useStyles();
    return (
        <div className={classes.features}>
            <Typography variant="h3" className={classes.featuresHeader}>Features</Typography>

        </div>
    )
};

export default Features
