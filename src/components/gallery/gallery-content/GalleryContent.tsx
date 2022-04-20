import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./gallery-content.scss"
import {useSelector} from "react-redux";
import {AppState} from "../../../redux/store";
import {Images} from "../../../services/api-types";

const GalleryContent: React.FC = (): React.ReactElement => {
    const images = useSelector<AppState>((state) => state.images) as Array<Array<Images>>
    const imagesBlocks = images.map((imgArr, index) => {
            const img = imgArr.map((img) => {
                return (
                    <Col key={img.id} xs={6} md={4} lg={2}>
                        <img src={img.thumbnailUrl} alt="img1"/>
                    </Col>
                )
            })
            return (
                <Container fluid className={"gallery-content"} key={index}>
                    <Container>
                        <b>Категория {index+1}</b>
                        <Container>
                            <Row>
                                {img}
                            </Row>
                        </Container>
                    </Container>
                </Container>
            )
        }
    )
    return (
        <Container className={"gallery-content-wr"}>
            {imagesBlocks}
        </Container>
    )
}
export default GalleryContent