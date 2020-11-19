import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/fonts.css';
export default function UIFigma(){
        return (
            <Container>
                <Row className="justify-content-end">
                    <Col md={6} xs={12}><h1><b><span style={{color:'white'}}>UI/UX</span> with <span style={{color:'white'}}>Figma</span></b></h1></Col>
                </Row>
                <Row className="justify-content-end">
                    <Col md={6} xs={12}>
                    Have you ever been enthralled by a video game and have wanted to build your own?
                    For making a game of your choice, a little bit of python programming is all you need to know. 
                    <br/><br/>
                    Learn Python the fun way by making games of your choice and discover the ease of coding with us
                    </Col>
                </Row>
                <Row style={{marginTop: '5%'}} className="justify-content-end">
                    <Col md={6} xs={12}><h2 style={{color:'white'}}><b><i className="far fa-calendar"></i> 22<sup>nd</sup> November 2020</b></h2></Col>
                </Row>
            </Container>
        );
}