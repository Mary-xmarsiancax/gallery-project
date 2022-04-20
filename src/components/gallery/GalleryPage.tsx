import React, {useEffect} from "react";
import GalleryContent from "./gallery-content/GalleryContent";
import {Container} from "react-bootstrap";
import "./gallery.scss"
import {imgApi} from "../../services/Api";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/reducers/img-reducer";


const Gallery: React.FC = (props): React.ReactElement => {
    const dispatch = useDispatch()
    useEffect(() => {
        imgApi()
            .then(resp => {
                dispatch(actions.setImg(resp.data))
                console.log(resp.data);
            });
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