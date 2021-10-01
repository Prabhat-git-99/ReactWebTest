import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../../../../Data/header';
import styled from 'styled-components';

import Logo from '../../../../images/logo.svg';
import { LinkType } from '../../../../Type';


const Header: FC< { fun: Function } > = ( { fun } ) => {


    return (

    <NavbarWrapper className="m-0">
    <nav className="navbar navbar-expand-lg navbar-inverse bg-inverse navbar-toggleable-sm">
        <div className="container-fluid">
            <a  className="navbar-brand">
                <img src={ Logo} height="42" alt="CoolBrand" />
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto">
                    {
                        data.map( ( item: LinkType ) => {

                            return (
      
                                <li className = 'single-link' >
                                    <NavLink to={item.refId} exact className="link" onClick = { ( ) => fun( item.refId ) } >
                                        {item.name}
                                    </NavLink>
                                </li>
                            )   

                        } )
                    }
                </ul>
            </div>
        </div>
    </nav>
</NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    .single-link {

        padding: 10px;
        font-size: 16px;
        
    }

    
    .navbar {

        padding: 20px 5%;
    }
    @media (max-width: 767px) {
    .navbar-collapse
        {
            z-index: 1;
            background-color: #301010;
        }
    }

    .link {

        text-decoration: none;
        color: white;
    }

    .navbar-toggler {
        /* color: black; */
        background: black;
    }

    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");

    }



`;

export default Header;
