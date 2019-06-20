import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import '../assets/css/navb.css';
import { Button, Nav, Navbar, NavDropdown, Dropdown, Form, FormControl, Row, Col } from "react-bootstrap";

class Navb extends Component {

  render() {
    return (
      <div id="navcolors">
     <Navbar  expand="lg">
  <Navbar.Brand href="/"> <img src={require('../assets/img/logo.png')} id="logocars" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link href="/carforrent"  >Car for rent</Nav.Link>
      <Nav.Link href="/cargalleries">Car galleries</Nav.Link>
      <Nav.Link href="/carnumber">Car parts </Nav.Link>
      <Nav.Link href="/importedcars">Imported cars </Nav.Link>
      <Nav.Link href="/carnumber">Car Number </Nav.Link>
      <Nav.Link href="/motorcycles">Motorcycles</Nav.Link>
      <Nav.Link href="/carforsale">Car for sale </Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
</div>
    );
  }
}
export default Navb;

