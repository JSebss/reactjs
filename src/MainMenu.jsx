import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    <nav class="navbar navbar-expand-lg navbar-light">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item"><NavLink exact to="/">Inicio </NavLink></li>
        <li class="nav-item"><NavLink exact to="/personajes">Personajes </NavLink></li>
        <li class="nav-item"><NavLink exact to="/contacto">Contacto </NavLink></li>
    </ul>
    </nav>
)

export default MainMenu;