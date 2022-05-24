import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../components/Inicio/images/logo.png';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import "../Inicio/style.css";


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();


    const handleLogout = () => {
        
        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar"> 
            <header class="header">
            <a href="#" class="logo">
            <img src={logo} class="user" alt=""/>
    </a>
<nav class="navbar">
<NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/marvel"
                    >
                        <div>
                           Vino 
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/dc"
                    >
                        <div>
                           Vino Premiun
                        </div>
                        
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/search"
                    >
                        <div>
                           Buscar    <b></b>         
                           <div class="fas fa-search" id="search-btn"></div>
                        </div>

                    </NavLink>
</nav>



</header>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    

               
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { user.name }
                    </span>
                    
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
        
        
    )
}