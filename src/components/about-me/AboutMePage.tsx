import React from "react";
import AboutMeContent from "./about-me-content/AboutMeContent";
import Header from "../header/Header";
import {Container} from "react-bootstrap";
import "./about-me.scss"


const AboutMe: React.FC= (): React.ReactElement => {
    return (
        <div className={"about-me-wr"}>
            <Container fluid className={"about-me-container"}>
                <AboutMeContent/>
            </Container>
        </div>
    )
}
export default AboutMe