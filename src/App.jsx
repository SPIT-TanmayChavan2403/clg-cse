import './App.css';
import Home from './pages/home';
import React, { useState, useEffect } from 'react';
import Internships from './pages/training/internship';
import HODMessage from './pages/about us/HODMessage';
import Library from './pages/about us/infrastructure/library'
import Objectives from './pages/about us/Objectives';
// import Infrastructure from './pages/about us/Infrastructue';
import Placements from './pages/training/placements';
import Patents from './pages/research/patents';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {Routes, Route, useLocation } from 'react-router-dom';
import Committees from './pages/extra_curricular/committee';
import ProgramOutcomes from './pages/about us/ProgramOutcomes';

function App(props) {
    const [ image, updateImage ] = useState("hero.jpg");
    const location = useLocation();

    useEffect(() => {
        updateImage(location.pathname.split('/').slice(location.pathname.split('/').length - 1)[0] + ".png")
    }, [location]);

    return (
        <div className="App">
            <Header img={image}/>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/research/patents" element={<Patents />} />
                  <Route path="/research/placements" element={<Placements />} />
                  <Route path="/training/internship" element={<Internships />} />
                  <Route path="/aboutus/objectives" element={<Objectives />} /> 
                  <Route path="/aboutus/infrastructure/library" element={<Library />} /> 
                  <Route path="/aboutus/program-outcomes" element={<ProgramOutcomes />} /> 
                  <Route path="/extra-curriculars/committees" element={<Committees />} /> 
              </Routes>
            <Footer />
        </div>
    );
}

export default App;