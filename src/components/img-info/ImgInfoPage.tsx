import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import books from "../../img/books.png";
import "./img-info.scss"
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {Images} from "../../services/api-types";

const ImgInfo: React.FC = (): React.ReactElement => {
    let {id} = useParams()
    const images = useSelector<AppState>((state) => state.images) as Array<Array<Images>>;
    const selectedObj = images.flat().find(obj => obj.id.toString() === id)

    return (
        <div className={"modal-wr"}>
            {selectedObj && <Container fluid className={"modal-container"}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title className={"modal-title"}>Информация о картинке</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <figure className={"modal-img-block"}>
                            <img src={selectedObj.thumbnailUrl} alt={selectedObj.title}/>
                            <figcaption>
                                <p>title:"{selectedObj.title}"</p>
                                <p>id:"{selectedObj.id}"</p>
                                <p>url:"{selectedObj.url}"</p>
                                <p>thumbnailUrl:"{selectedObj.thumbnailUrl}"</p>
                            </figcaption>
                        </figure>
                    </Modal.Body>
                    <Modal.Footer>
                        <NavLink to="/"><Button variant="primary">Назад</Button>
                        </NavLink>
                    </Modal.Footer>
                </Modal.Dialog>
            </Container>}
        </div>
    )
}
export default ImgInfo