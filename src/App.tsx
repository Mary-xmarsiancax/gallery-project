import React from 'react';
import './App.css';
import GalleryPage from "./components/gallery/galleryPage";
import AboutMePage from "./components/about-me/aboutMePage";
import Gallery from "./components/gallery/galleryPage";
import AboutMe from "./components/about-me/aboutMePage";
import ImgInfo from "./components/img-info/imgInfoPage";

function App() {
  return (
    <div className="App">
      <div><Gallery/></div>
      <div><AboutMe/></div>
      <div><ImgInfo/></div>
    </div>
  );
}

export default App;
