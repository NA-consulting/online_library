// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>&copy; 2024 Online Library. All rights reserved.</FooterText>
        </FooterContainer>
    );
};

export default Footer;