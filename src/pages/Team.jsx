import TeamCard from '../components/TeamCard'
import './Team.css'

const Team = () => {

    return (
        <div className="team">
            <h1>Meet our team</h1>
            <div className="team__cards">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
            
        </div>
    )
}

export default Team
