// src/components/Navbar.js
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color: #ffafcc;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/gallery">Gallery</StyledLink>
      <StyledLink to="/love-letter">Love Letter</StyledLink>
      <StyledLink to="/music">Music</StyledLink>
    </Nav>
  );
};

export default Navbar;