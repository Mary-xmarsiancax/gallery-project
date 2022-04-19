import React from "react";
import GalleryContent from "./gallery-content/GalleryContent";
import {Container} from "react-bootstrap";
import "./gallery.scss"


const Gallery: React.FC = (props): React.ReactElement => {
    return (
        <div className={"gallery-wr"}>
            <Container fluid className={"gallery-container"}>
                <GalleryContent/>
            </Container>
            {/*<Preloader/>*/}
        </div>

    )
}
export default Gallery