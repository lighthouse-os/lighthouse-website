import TeamCard from '../components/TeamCard'
import './Team.css'

const Team = () => {
    const team = [
        {
            name: "Vyom Desai",
            position: "Core Developer",
            github: "https://github.com/CannedShroud",
            instagram: "#",
            telegram: "#",
            imageURL: "https://avatars.githubusercontent.com/u/52405504?v=4",
        },
        {
            name: "Shoury Sharma",
            position: "Core Developer",
            github: "https://github.com/galanteria01",
            instagram: "#",
            telegram: "#",
            imageURL: "https://avatars.githubusercontent.com/u/58800160?s=400&u=a4642596aca6664797bce5a52b7176fe90c9936a&v=4",
        },
        {
            name: "Rishawn Iyer",
            position: "Core Developer",
            github: "https://github.com/Stealth1226",
            instagram: "#",
            telegram: "#",
            imageURL: "https://avatars.githubusercontent.com/u/70256146?v=4",
        }
    ]

    return (
        <div className="team">
            <h1>Meet our team</h1>
            <div className="team__cards">
                {team.map(({name, instagram, telegram, github, position, imageURL, bio}) => (
                    <TeamCard name={name} position={position} github={github} instagram={instagram} telegram={telegram} imageURL={imageURL} />
                ))}
            </div>
            
        </div>
    )
}

export default Team;
