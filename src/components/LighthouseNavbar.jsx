import { AppBar, Link, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        },
    },
    appBar: {
        borderBottom: '1px solid ${theme.palette.divider}'
    },
    toolBar: {
        flexWrap: 'wrap',
    },
    toolbarTitle:{
        flexGrow: 1,
    },
    link:{
        margin: theme.spacing(1,1.5),
    }

}))

const LighthouseNavbar = () => {
    const classes = useStyles();
    return (
        <div className="lighthouse-navbar">
            <AppBar position="static" color="transparent" elevation="{3}" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" noWrap className={classes.toolbarTitle}>
                    Project Lighthouse
                    </Typography>
                    <nav>
                        <Link variant="button" color="textSecondary" href="#" className={classes.link}>
                        Features
                        </Link>
                        <Link variant="button" color="textSecondary" href="#" className={classes.link}>
                        Team
                        </Link>
                        <Link variant="button" color="textSecondary" href="#" className={classes.link}>
                        Downloads
                        </Link>
                        
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default LighthouseNavbar
