// src/components/Navbar.js
import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  box-shadow: 0 4px 8px rgba(255, 20, 147, 0.2);
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    padding: 1rem;
    gap: 1rem;
    z-index: 1000;
    animation: slideDown 0.3s ease-in-out;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Pacifico', cursive;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    
    &:before {
      content: '❤️';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 1;
      animation: heartBeat 1s infinite;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const BurgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };

  return (
    <Nav>
      <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </BurgerMenu>
      <NavLinks isOpen={isOpen}>
        <StyledLink onClick={() => scrollToSection('hero')}>
          🏠 Home
        </StyledLink>
        <StyledLink onClick={() => scrollToSection('gallery')}>
          📸 Our Story
        </StyledLink>
        <StyledLink onClick={() => scrollToSection('letter')}>
          💌 Love Letter
        </StyledLink>
        <StyledLink onClick={() => scrollToSection('countdown')}>
          ⏰ Together Forever
        </StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;