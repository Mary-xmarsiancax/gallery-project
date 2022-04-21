import React from 'react';
import Gallery from "./components/gallery/GalleryPage";
import AboutMe from "./components/about-me/AboutMePage";
import ImgInfo from "./components/img-info/ImgInfoPage";
import {Route, Routes } from 'react-router-dom';
import "./App.scss";
import Header from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
import {useSelector} from "react-redux";
import {AppState} from "./redux/store";

function App() {
    const isLoading = useSelector<AppState>((state) => state.isLoading)as string;
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={ <Gallery/>}/>
                <Route path="/aboutMe" element={ <AboutMe/> }/>
                <Route path="/imgInfo" element={ <ImgInfo/> }/>
            </Routes>
            {isLoading ?
                <Preloader/>
                : null}
        </div>
    );
}

export default App;
