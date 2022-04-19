import React from "react";
import AboutMeContent from "./about-me-content/AboutMeContent";
import Header from "../header/Header";
import {Container} from "react-bootstrap";
import "./about-me.scss"

type AboutMeProps = {
    label:string
}
const AboutMe: React.FC<AboutMeProps> = (props): React.ReactElement => {
    return (
        <div className={"about-me-wr"}>
            <Header label={props.label}/>
            <Container fluid className={"about-me-container"}>
                <AboutMeContent/>
            </Container>
        </div>
    )
}
export default AboutMe