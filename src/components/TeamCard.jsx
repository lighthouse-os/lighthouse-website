import { Avatar, IconButton } from '@material-ui/core'
import './TeamCard.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

const TeamCard = () => {
    return (
        <div className="teamCard">
            <div className="teamCard__details">
                <Avatar  className="teamCard__avatar"/>
                <div className="teamCard__basic">
                    <p className="teamCard__name">Shoury Sharma</p>
                    <p>Core Developer</p>
                </div>
            </div>
            <div className="teamCard__about">
                <p>Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem.</p>
            </div>
            <div className="teamCard__socialMedia">
                <IconButton >
                    <GitHubIcon />
                </IconButton>
                <IconButton>
                    <InstagramIcon />
                </IconButton>
                <IconButton>
                    <TelegramIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default TeamCard
