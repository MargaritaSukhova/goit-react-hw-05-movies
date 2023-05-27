import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ccc;
  box-shadow: 0px 2px 10px 0.5px;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 24px;
  color: #010101;
  text-transform: uppercase;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: #d30c0d;
  }
`;
