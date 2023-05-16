import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "../App.css";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="#">SriLanka Explore</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
               
                <NavItem>
                  <NavLink href="#servicesBody">Cultural Item</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Historical Places</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Traditional Food</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Activities</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Destination</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Safe Guide</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="#contactBody">Contact</NavLink>
                </NavItem>
                <Button color="success">Login</Button>{" "}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
