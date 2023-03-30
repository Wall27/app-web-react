import React from "react";
import {NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <h1>Aplicacion de Administracion de celulares</h1>
            <hr/>
            <div className="links">
                <NavLink to="/add" className={link} activeClassName="active" exact>
                    Lista de celulares
                </NavLink>
                <NavLink to="/add" className={link} activeClassName="active">
                    Agregar Celular
                </NavLink>
                <NavLink to="/add" className={link} activeClassName="active">
                    Eliminar Celular
                </NavLink>
            </div>
        </header>
    );

};

export default Header;