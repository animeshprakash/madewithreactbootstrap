import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Pygame() {
        return (
            <Container>
                <Row>
                    <Col><h1><b>Intro to <span style={{color:'white'}}>Pygame</span></b></h1></Col>
                </Row>
                <Row>
                    <Col md={5} xs={12}>
                    Have you ever been enthralled by a video game and have wanted to build your own?
                    For making a game of your choice, a little bit of python programming is all you need to know. 
                    <br/><br/>
                    Learn Python the fun way by making games of your choice and discover the ease of coding with us
                    </Col>
                </Row>
                <Row className="justify-content-end" style={{marginTop: '5%'}}>
                    <Col><h2 style={{color:'white'}}><b><i className="far fa-calendar"></i> 18<sup>th</sup> November 2020</b></h2></Col>
                </Row>
            </Container>
        );
}