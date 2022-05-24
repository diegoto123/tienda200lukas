import { Link } from 'react-router-dom'
import './HeroCard.css';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
       
                            
                            <Link to={`/hero/${id}`} className="my-card">
                            <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero}/>
            <div className="profile-name">{superhero}</div>
         
            
                                Más...
                            </Link>

                  
    )
}
