import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// Could not find a solution to ts error here!
// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

export default function CustomNavbar() {
  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand><Link className="text-light" to="/">Recipe App</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link className="text-light" to="add-recipe">Add Recipe</Link></Nav.Link>
            <Nav.Link><Link className="text-light" to="add-inventory">Inventory</Link></Nav.Link>
            <Nav.Link><Link className="text-light" to="shopping-list">Shopping List</Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link className="text-light" to="/">Profile</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
