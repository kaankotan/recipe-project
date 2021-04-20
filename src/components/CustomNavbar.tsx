import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// Could not find a solution to ts error here!
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Recipe App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/signup">Signup</Link></Nav.Link>
            <Nav.Link>Add Recipe</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to="/">Profile</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
