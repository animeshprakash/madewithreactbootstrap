import './css/LandingPage.css';
import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Logo from '../img/techexlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.css';

class LandingPage extends Component {
  render() {
    return (
     <Container className="fill">
      <Row className="justify-content-center">
        <Col xs={4} style={{textAlign:'center'}}>
          <img src={Logo} alt="" width="100%" height="100%"/>
        </Col>
      </Row>
      <Row className="gap"> </Row>
      <Row className="justify-content-center">
        <Col xs={6} style={{textAlign:'center'}}>Scroll Down</Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col xs={1} style={{textAlign:'center'}}><a href="#introduction"><i className="fas fa-chevron-down"></i></a></Col>
      </Row>
     </Container>
    );
  }
}
export default LandingPage;
