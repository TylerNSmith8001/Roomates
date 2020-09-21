import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <Container className="p-2 mx-0 mt-3 mb-0 h6 border-top border-dark position-fixed text-light" style={{backgroundColor: "rgb(0,47,87)", maxWidth: "100vw", overflow: "hidden", bottom:0}}>
            <Row>
                <Col xs={2} className="text-left text-muted">
                    ©2020 Tyler Smith
                </Col>
                <Col xs={8} className="text-center">
                    <Container>
                        <Row>
                            <Col>
                                <Link to="/about" className="text-light">About</Link>
                            </Col>
                            <Col>
                                <Link to="/contact" className="text-light">Contact</Link>
                            </Col>
                            <Col>
                                <Link to="/privacy" className="text-light">Privacy Policy</Link>
                            </Col>
                            <Col>
                                <Link to="/terms" className="text-light">Terms of Service</Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={2} className="text-right text-warning">
                    Work In Progress
                </Col>
            </Row>
        </Container>
    )
}

export default Footer