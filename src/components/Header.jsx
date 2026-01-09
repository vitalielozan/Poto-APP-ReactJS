import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand='lg' bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>Photo Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link
              href='https://en.wikipedia.org/wiki/Butterfly'
              target='_blank'
            >
              Wiki
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
