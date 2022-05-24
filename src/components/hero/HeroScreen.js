import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate()

    const hero = useMemo( () => getHeroById(heroeId), [ heroeId ]);
    
    

    const handleReturn = () => {
        navigate( -1 );
    }


    if (!hero) {
        return <Navigate to='/' />
    }
    
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imagePath = `/assets/${ id }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath } 
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <section class="footer">
                <div className='creditt'>
                <h3>Nombre Vino</h3>
                <p>{ hero.superhero }</p>
                </div>
                
                
                
                </section>
                

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar 
                </button>

            </div>

        </div>
    )
}
