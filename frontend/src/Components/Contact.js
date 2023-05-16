import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../assets/svg/mail.svg";

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Log In</h1>
          </header>
          
          <hr />
          <br />
          <section className="msg text-center">
            <form action="">
              <Row >
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required
                  />
                  <Button outline color="light" className="float-left">
                    Log In
                  </Button>
               
                 
                  
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }
}

export default Contact;
