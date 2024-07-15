// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom

const FooterContainer = styled.footer`
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
    position: relative;
    bottom: 0;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 1rem;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    &:hover {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; 2024 Online Library. All rights reserved.</FooterText>
            <StyledLink to="/">Home</StyledLink> {/* Ajoutez le lien vers Home.jsx */}
        </FooterContainer>
    );
};

export default Footer;
