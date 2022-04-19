import React from "react";
import GalleryContent from "./gallery-content/GalleryContent";
import Header from "../header/Header";
import Preloader from "../preloader/Preloader";

type GalleryProps = {
    label: string
}

const Gallery: React.FC<GalleryProps> = (props): React.ReactElement => {
    return (
        <div>
            <Header label={props.label}/>
            <GalleryContent/>
            {/*<Preloader/>*/}
        </div>

    )
}
export default Gallery