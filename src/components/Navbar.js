import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="bg-light d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                </svg>
                <span className="fs-4">Note App</span>
            </a>

            <ul className="nav nav-pills">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/"} exact={"true"}>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/about"}>Информация</NavLink>

                    </li>
                </ul>
            </ul>
        </nav>

    );
};

export default Navbar;