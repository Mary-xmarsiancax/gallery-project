import React from 'react';
import Gallery from "./components/gallery/GalleryPage";
import AboutMe from "./components/about-me/AboutMePage";
import ImgInfo from "./components/img-info/ImgInfoPage";
import {Route, Routes } from 'react-router-dom';
import "./App.scss";
import Header from "./components/header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={ <Gallery/>}/>
                <Route path="/aboutMe" element={ <AboutMe/> }/>
                <Route path="/imgInfo" element={ <ImgInfo/> }/>
            </Routes>
        </div>
    );
}

export default App;
