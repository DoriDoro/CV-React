import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavbarMain() {

    const [activeBurger, setActiveBurger] = useState(false)

    function handleBurger(val) {
        setActiveBurger(!activeBurger)
    }

    return (
        <header className="NavbarMain">
            <NavLink className="NavbarMain__main" to={"/"}> Curriculum Vitae </NavLink>

        <nav className="NavbarMain__links">
            <NavLink activeClassName="active" className="NavBarMain__content" to={"/about"}> About Me </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content" to={"/contact-details"}> Contact Me </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content" to={"/experiences"}> Experiences </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content" to={"/projects"}> Projects </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content" to={"/skills"}> Skills </NavLink>
        </nav>
        
        <i id="NavbarMain__burger" className="fas fa-bars" onClick={handleBurger}></i> 
        <nav className={"NavbarMain__links-burger" + (activeBurger ? " is-active" : "") }>
            <NavLink activeClassName="active" className="NavBarMain__content-burger" to={"/about"}> About Me </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content-burger" to={"/contact-details"}> Contact Me </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content-burger" to={"/experiences"}> Experiences </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content-burger" to={"/projects"}> Projects </NavLink>
            <NavLink activeClassName="active" className="NavBarMain__content-burger" to={"/skills"}> Skills </NavLink>
        </nav>   

        </header>
    )
}
