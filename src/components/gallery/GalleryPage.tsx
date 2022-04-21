import React, {useEffect, useLayoutEffect} from "react";
import GalleryContent from "./gallery-content/GalleryContent";
import {Container} from "react-bootstrap";
import "./gallery.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {Images} from "../../services/api-types";


const Gallery: React.FC = (props): React.ReactElement => {

    return (
        <div className={"gallery-wr"}>
            <Container fluid className={"gallery-container"}>
                <GalleryContent/>
            </Container>
        </div>

    )
}
export default Gallery