import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,NavItem, NavLink} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Navbar
    color="light"
    expand="md"
    fixed="top"
    full
    light
  >
    <NavbarBrand href="/">
      K-Town Dog Tinder
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="ml-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dogindex">
           See the Dogs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/dognew">
           Add a Dog
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
        
        );
    }
}

export default Header;