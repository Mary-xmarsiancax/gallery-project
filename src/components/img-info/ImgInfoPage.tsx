import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import books from "../../img/books.png";
import "./img-info.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {Images} from "../../services/api-types";

const ImgInfo: React.FC = (): React.ReactElement => {
    const images = useSelector<AppState>((state) => state.images) as Array<Array<Images>>;
    const selectedId = useSelector<AppState>((state) => state.selectedId) as number;
    const mainArr = [...images[0], ...images[1], ...images[2], ...images[3]]
    const selectedObj = mainArr.find(obj =>obj.id === selectedId)

    return (
        <div className={"modal-wr"}>
            <Container fluid className={"modal-container"}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title className={"modal-title"}>Информация о картинке</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <figure className={"modal-img-block"}>
                            <img src={selectedObj!.thumbnailUrl} alt="books"/>
                            <figcaption>
                                <p>title:"{selectedObj!.title}"</p>
                                <p>id:"{selectedObj!.id}"</p>
                                <p>url:"{selectedObj!.url}"</p>
                                <p>thumbnailUrl:"{selectedObj!.thumbnailUrl}"</p>
                            </figcaption>
                        </figure>
                    </Modal.Body>
                    <Modal.Footer>
                        <NavLink to="/"><Button variant="primary">Назад</Button>
                        </NavLink>
                    </Modal.Footer>
                </Modal.Dialog>
            </Container>
        </div>
    )
}
export default ImgInfo