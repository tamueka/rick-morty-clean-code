import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="./svg/rick-morty.svg" alt="Rick and Morty Logo" />
        <Title>Rick and Morty App</Title>
      </LogoContainer>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/characters">Characters</NavItem>
        <NavItem to="/about">About</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #ecf0f1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #ecf0f1;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

export default Header;
