import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./about-me-content.scss"
import books from "../../../img/books.png"
import bikeLogo from "../../../img/bikeLogo.png"
import volleyball from "../../../img/volleyball.png"

const AboutMeContent: React.FC = (): React.ReactElement => {
    return (
        <Container className={"about-me-content"}>
            <Container fluid>
                AboutMeContent.
            </Container>
            <Container fluid>
                <Row>
                    <Col className={"img-block"} xs={12} md={4}>
                        <figure>
                            <img src={books} alt="books"/>
                            <figcaption>
                                <div><b>Чтение художественной литературы</b></div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col className={"img-block"} xs={12} md={4}>
                        <figure>
                            <img src={bikeLogo} alt="bikeLogo"/>
                            <figcaption>
                                <div><b>Велопрогулки</b></div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col className={"img-block"} xs={12} md={4}>
                        <figure>
                            <img src={volleyball} alt="voleibol"/>
                            <figcaption>
                                <div><b>Волейбол</b></div>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}
export default AboutMeContent