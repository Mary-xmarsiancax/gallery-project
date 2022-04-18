import React from "react";
import GalleryContent from "./gallery-content/GalleryContent";
import Header from "../header/Header";

type GalleryProps = {
    label: string
}

const Gallery: React.FC<GalleryProps> = (props): React.ReactElement => {
    return (
        <div>
            <Header label={props.label}/>
            <GalleryContent/>
        </div>

    )
}
export default Gallery