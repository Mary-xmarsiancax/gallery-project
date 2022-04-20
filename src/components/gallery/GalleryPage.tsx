import React, {useEffect} from "react";
import GalleryContent from "./gallery-content/GalleryContent";
import {Container} from "react-bootstrap";
import "./gallery.scss"
import {useDispatch} from "react-redux";


const Gallery: React.FC = (props): React.ReactElement => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "FETCH_IMAGES"});
    }, [])

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