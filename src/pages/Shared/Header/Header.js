import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={45} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#packages">Packages</Nav.Link>
              <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="about" >About Me</Nav.Link>
            </Nav>
            <Nav>
              
              {
                user ?
                  <button onClick={handleSignOut} className='btn' variant="link" >Sign Out</button>
                  :
                  <Nav.Link as={Link} to="login">
                    Log In
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;