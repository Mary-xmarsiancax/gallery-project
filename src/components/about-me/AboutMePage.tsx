import React from "react";
import AboutMeContent from "./about-me-content/AboutMeContent";
import Header from "../header/Header";

type AboutMeProps = {
    label:string
}
const AboutMe: React.FC<AboutMeProps> = (props): React.ReactElement => {
    return (
        <div>
            <Header label={props.label}/>
            <AboutMeContent/>
        </div>
    )
}
export default AboutMe