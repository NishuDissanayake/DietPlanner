import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
function App() {
  return (
    <div className="APP">
      <Navbar
        bg="myRed"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src="./images/logo.png" width="60px" height="60px"></img>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
            <NavDropdown title="Pages">
              <NavDropdown.Item href="Pages/Page1">Page 1</NavDropdown.Item>
              <NavDropdown.Item href="Pages/Page2">Page 2</NavDropdown.Item>
              <NavDropdown.Item href="Pages/Page3">Page 3</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="Blog">Blog</Nav.Link>
            <Nav.Link href="SignUp">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default App;
