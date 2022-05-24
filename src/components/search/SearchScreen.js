import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const heroesFileted = useMemo( () => getHeroesByName(q), [q] );


    const handleSearch = (e) => {

        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }


    return (
        <>
        <section class="footer">
        <div class="creditt">Búsquedas</div>
           
            <hr />

            <div className="row">

                <div className="col-5">
                <div class="creditt">Buscar</div>
                
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Buscar un héroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />


                        <button 
                            className="btn btn-outline-primary mt-1"
                            type="submit">
                            Buscar...
                        </button>

                    </form>


                </div>

                <div className="col-7">
                <div class="creditt">Resultados</div>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info"> Buscar un héroe </div>
                            : ( heroesFileted.length === 0 ) 
                                && <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }


                    {
                        heroesFileted.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }


                </div>

            </div>
            </section>
        </>
    )
}
