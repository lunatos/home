import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./BioSection.css";

function BioSection() {
    return (
        <Container className="bio-container">
            <div className="brain-background"></div>
            <Row md={6} className="test">
                <Col>
                    <Image className="picture" src='/img/EmpEu.jpeg' width={350}></Image>
                </Col>
                <Col>
                    sample text asdasdasda da sdasd asd a
                </Col>
            </Row>
            <div className="page-wrapper">
                <div className="text-container">
                </div>
            </div>
        </Container>
    );
}

export default BioSection