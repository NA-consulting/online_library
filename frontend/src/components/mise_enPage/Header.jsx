// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Online Library</HeaderTitle>
        </HeaderContainer>
    );
};

export default Header;