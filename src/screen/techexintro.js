import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

function TechExIntro(){
    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <h1>What is <span style={{color:"#FB8449"}}>TechEx</span></h1>
                </Col>
            </Row>
            <Row className = "justify-content-center">
                <Col lg={2}>
                    And the doors to TechEx are open again! We've got the perfect introduction to tech and 
                    design on the other side. What are you waiting for? Scroll Down!¡
                </Col>
            </Row>
        </Container>)
}
export default TechExIntro;