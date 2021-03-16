import React from 'react';
import { Button,Typography,Grid, makeStyles,Card,CardMedia,CardContent,CardActions,Container,IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
const team = [
    {
        id:1,
        name: "Shoury Sharma",
        position: "Core Developer",
        image: "#",
        githubURL: "#",
        instaURL: "#",
        teleURL: "#"
    },
    {
        id: 2,
        name: "Vyom Desai",
        position: "Core Developer",
        image: "#",
        githubURL: "#",
        instaURL: "#",
        teleURL: "#"
    },
    {
        id:3,
        name: "Rishawn Iyer",
        position: "Core Developer",
        image: "#",
        githubURL: "#",
        instaURL: "#",
        teleURL: "#"
    }
]

const useStyles = makeStyles(theme => ({
  icons: {
    display: "flex",
    justifyContent: "space-around"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: "20px",
    background: "#ffffff ",
    boxShadow:  "-20px -20px 60px #d0d0d0, 20px 20px 60px #f0f0f0"
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  team: {
    height: "100vh",
  },
  heading: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: "flex",
    justifyContent:"center"
  }
}))

const Team = (props) => {
    const classes = useStyles();
    return (
        <div class={classes.team}>
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h3" className={classes.heading}>Team</Typography>
          <Grid container spacing={6}>
            {team.map((member) => (
                <Grid item key={member.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="http://www.gifpng.com/300/2a454b/ffffff/?text=Random%20background%20color%20Random%20text%20color"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {member.name}
                        </Typography>
                        <Typography>
                        {member.position}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.icons}>
                        <IconButton size="small" color="primary">
                          <GitHubIcon />
                        </IconButton>
                        <IconButton size="small" color="primary">
                          <TelegramIcon />
                        </IconButton>
                        <IconButton size="small" color="primary">
                          <InstagramIcon />
                        </IconButton>
                    </CardActions>
                  </Card>
                </Grid> 
            ))}
            </Grid>
        </Container>
        </div>
    )
}

export default Team
