import { IconButton } from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

const team = [
    {
        name: "Vyom Desai",
        position: "Core Developer",
        location: "India",
        telegramHandle: "#",
        instagramHandle: "#",
        githubHandle: "#",
        imageUrl: "https://avatars.githubusercontent.com/u/52405504?v=4"
    },
    {
        name: "Shoury Sharma",
        position: "Core Developer",
        location: "India",
        telegramHandle: "#",
        instagramHandle: "#",
        githubHandle: "#",
        imageUrl: "https://avatars.githubusercontent.com/u/58800160?v=4"
    },
    {
        name: "Rishawn Iyer",
        position: "Core Developer",
        location: "India",
        telegramHandle: "#",
        instagramHandle: "#",
        githubHandle: "#",
        imageUrl: "https://avatars.githubusercontent.com/u/70256146?v=4"
    },

]

const Team = () => {
    return (
        <div className="team bg-blue-400" id="team">
            <h1 className="text-center font-sans text-4xl font-semibold p-5 text-white">Meet our team</h1>
            <div className="team__members flex flex-wrap justify-around">
                {team.map((member) => (
                    <figure class="bg-gray-100 rounded-xl p-8 w-full lg:w-1/4 m-8">
                    <img class="w-32 h-32 rounded-full mx-auto" src={member.imageUrl} alt="" width="384" height="512" />
                    <div class="pt-6 space-y-4">
                        <figcaption class="font-medium">
                        <div class="text-cyan-600">
                            {member.name}
                        </div>
                        <div class="text-gray-500">
                            {`${member.position}, ${member.location}`}
                        </div>
                        </figcaption>
                    </div>
                    <div className="contacts flex justify-around my-4">
                        <IconButton>
                            <TelegramIcon />
                        </IconButton>
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </div>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Team
