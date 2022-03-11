import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/gamepage">Play Game</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
  transition: 0.4s;

  &.active {
    background: #444;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #ddd;
  color: inherit;
  height: 48px;
  border: 3px solid #444;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
