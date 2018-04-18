import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavBar = () => {
  return(<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="home">Autumn's Favorite Books</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="books">
        Books
      </NavItem>
      <NavItem eventKey={2} href="authors">
        Authors
      </NavItem>
      <NavItem eventKey={3} href="newBook" >
        New Book
      </NavItem>
    </Nav>
  </Navbar>);
}

export default NavBar;