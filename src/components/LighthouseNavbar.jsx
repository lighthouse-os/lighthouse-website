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
    }

}))

const LighthouseNavbar = () => {
    const classes = useStyles();
    return (
        <div className="lighthouse-navbar">
            <AppBar position="static" color="transparent" elevation="0">
                <Toolbar>
                    <Typography variant="h6" noWrap>Project Lighthouse</Typography>
                    <nav>
                        <Link variant="button" color="textSecondary">Features</Link>
                        <Link variant="button" color="textSecondary">Team</Link>
                        <Link variant="button" color="textSecondary">Downloads</Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default LighthouseNavbar
