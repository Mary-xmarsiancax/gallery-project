import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./gallery-content.scss"

const GalleryContent:React.FC = ():React.ReactElement=>{
    return (
        <Container className={"gallery-content-wr"}>
            <Container fluid className={"gallery-content"}>
                <Container>
                    <b>Картинки с природой</b>
                    <Container>
                        <Row>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container>
                    <b>Картинки с котятами</b>
                    <Container>
                        <Row>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container>
                    <b>Картинки с людьми</b>
                    <Container>
                        <Row>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container>
                    <b>Картинки с мотоциклами</b>
                    <Container>
                        <Row>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                            <Col xs={6} md={4} lg={2}>
                                <img src="#" alt="img1"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}
export default GalleryContent