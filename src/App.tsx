import React from 'react';
import Gallery from "./components/gallery/GalleryPage";
import AboutMe from "./components/about-me/AboutMePage";
import ImgInfo from "./components/img-info/ImgInfoPage";
import {Route, Routes } from 'react-router-dom';
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Gallery label={"ГАЛЕРЕЯ"}/>}/>
                <Route path="/aboutMe" element={ <AboutMe label={"ОБО МНЕ"}/> }/>
                <Route path="/imgInfo" element={ <ImgInfo/> }/>
            </Routes>
        </div>
    );
}

export default App;
