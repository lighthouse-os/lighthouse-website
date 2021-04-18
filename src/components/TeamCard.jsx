import { Avatar, IconButton } from '@material-ui/core'
import './TeamCard.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

const TeamCard = ({name, instagram, telegram, github, position, imageURL}) => {

    return (
        <div className="teamCard">
            <div className="teamCard__details">
                <Avatar src={imageURL} className="teamCard__avatar"/>
                <div className="teamCard__basic">
                    <p className="teamCard__name">{name}</p>
                    <p>{position}</p>
                </div>
            </div>
            <div className="teamCard__about">
                <p>Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem.</p>
            </div>
            <div className="teamCard__socialMedia">
                <IconButton href={github} >
                    <GitHubIcon />
                </IconButton>
                <IconButton>
                    <InstagramIcon href={instagram} />
                </IconButton>
                <IconButton>
                    <TelegramIcon href={telegram} />
                </IconButton>
            </div>
        </div>
    )
}

export default TeamCard
