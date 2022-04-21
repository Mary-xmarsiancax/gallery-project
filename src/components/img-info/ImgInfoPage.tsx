import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import books from "../../img/books.png";
import "./img-info.scss"

const ImgInfo: React.FC = (): React.ReactElement => {
    const handleToBack = () => {

    }
    return (
        <div className={"modal-wr"}>
            <Container fluid className={"modal-container"}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title className={"modal-title"}>Информация о картинке</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <figure className={"modal-img-block"}>
                            <img src={books} alt="books"/>
                            <figcaption>
                                <p>title:""</p>
                                <p>id:""</p>
                                <p>url:""</p>
                            </figcaption>
                        </figure>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleToBack}>Назад</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Container>
        </div>


    )
}
export default ImgInfo