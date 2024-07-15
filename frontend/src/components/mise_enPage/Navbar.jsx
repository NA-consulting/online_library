// src/components/mise_enPage/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: #fff;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return (
        <div>
        <NavbarContainer>
            <div>Online Library</div>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/review">Review</NavLink> {/* Ajout du lien vers le formulaire d'avis */}
            </NavLinks>
        </NavbarContainer></div>
    );
};

export default Navbar;
