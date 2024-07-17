// BurgerMenu.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerButton = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    width: 100%;
    height: 4px;
    background-color: #fff;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(-20px)' : 'translateX(0)')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const NavMenu = styled.nav`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 20px;
  background: rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 8px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 10px 0;
  }
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <BurgerMenuContainer>
      <BurgerButton open={open} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <NavMenu open={open}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/contact">Contact</Link>
      </NavMenu>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
