// src/components/Navbar.js
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, #ff69b4, #ff1493);
  box-shadow: 0 4px 8px rgba(255, 20, 147, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Pacifico', cursive;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  
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

  @keyframes heartBeat {
    0% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(1.2); }
    100% { transform: translateX(-50%) scale(1); }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <StyledLink to="/">🏠 Home</StyledLink>
        <StyledLink to="/gallery">📸 Our Story</StyledLink>
        <StyledLink to="/letter">💌 Love Letter</StyledLink>
        <StyledLink to="/countdown">⏰ Together Forever</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;