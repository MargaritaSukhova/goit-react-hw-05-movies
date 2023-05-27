import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
