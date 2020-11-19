import React from 'react';
import {Navbar,Nav} from 'react-bootstrap/';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './screen/css/common.css';
export default function MenuBar(){
    return (<Navbar bg="light" fixed="top" variant="light" style={{paddingBottom: '0'}}>
                <Container style={{textAlign:"center"}}>
                    <Row className="align-items-baseline justify-content-between" style={{width:'96%'}}>
                        <Col xs={7} className="text-center">
                            <Navbar.Brand href="#homepage"><h1 style={{color: "#f58c57"}}><b>TechEx</b></h1></Navbar.Brand>
                        </Col>
                        <Col xs={1}>
                            <Nav.Link href="#introduction"><b>About</b></Nav.Link>
                        </Col>
                        <Col xs={1}>
                            <Nav.Link href="#pygame"><b>Events</b></Nav.Link>
                        </Col>
                        <Col xs={1}>
                            <Nav.Link href="#register"><b>Register</b></Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>);
}