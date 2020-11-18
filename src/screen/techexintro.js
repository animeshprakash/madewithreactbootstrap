import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import QuestionImg from '../img/firstpageAssets/question.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function TechExIntro(){
    return (
        <Container>
            <Row className="justify-content-center text-center">
                <Col xs={5}><img src={QuestionImg} alt="" width="100" height="110" style={{opacity:0.7}}/></Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col xs={4}>
                    <h1><b>What is <span style={{color:"#FB8449"}}>TechEx</span></b></h1>
                </Col>
            </Row>
            <br/>
            <Row className = "justify-content-center text-center">
                <Col lg={5} xs={11}>
                    And the doors to TechEx are open again! We've got the perfect introduction to tech and 
                    design on the other side. What are you waiting for? Scroll Down!
                </Col>
            </Row>
        </Container>)
}
export default TechExIntro;