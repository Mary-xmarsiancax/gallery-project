import React from 'react';
import './App.css';
import Gallery from "./components/gallery/galleryPage";
import AboutMe from "./components/about-me/aboutMePage";
import ImgInfo from "./components/img-info/imgInfoPage";
import {Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Gallery/>}/>
                <Route path="/aboutMe" element={ <AboutMe/> }/>
                <Route path="/imgInfo" element={ <ImgInfo/> }/>
            </Routes>
        </div>
    );
}

export default App;
