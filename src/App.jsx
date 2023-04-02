import './App.css';
import Home from './pages/home';
import React, { useState, useEffect } from 'react';
import Internships from './pages/training/internship';
import HODMessage from './pages/about us/HODMessage';
import Library from './pages/about us/infrastructure/library'
import Objectives from './pages/about us/Objectives';
import Placements from './pages/training/placements';
import Patents from './pages/research/patents';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {Routes, Route, useLocation } from 'react-router-dom';
import Committees from './pages/extra_curricular/committee';
import CourseOutline from './pages/about us/Course outline';
import FacultyAwards from './pages/awards/facultyAwards';
import StudentAwards from './pages/awards/studentAwards';
import TechnicalStaff from './pages/faculty/technicalStaff';

function App(props) {
    const [image, updateImage] = useState("hero.jpg");
    const location = useLocation();

    useEffect(() => {
        let url = location.pathname.split('/');
        let imageName = url.slice(location.pathname.split('/').length - 1);
        console.log(imageName);
        if (imageName[0] === ""){
            updateImage("./banner/hero.png")
        } else {
            updateImage( './banner/' + imageName[0] + ".png")
        }
    }, [location]);

    return (
        <div className="App">
            
            <Header img={image} alt="header"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/training/internship" element={<Internships />} />
                <Route path="/training/placements" element={<Placements />} />
                <Route path="/awards/facultyawards" element={<FacultyAwards />} />
                <Route path="/awards/studentawards" element={<StudentAwards />} />
                <Route path="/extra-curriculars/committees" element={<Committees />} />
                <Route path="/research/patents" element={<Patents />} />
                <Route path="/aboutus/objectives" element={<Objectives />} />
                <Route path="/aboutus/hodmessage" element={<HODMessage />} />
                <Route path="/aboutus/infrastructure/courseoutline" element={<CourseOutline />} />
                <Route path="/aboutus/infrastructure/library" element={<Library />} />
                <Route path="/faculty/technicalstaff" element={<TechnicalStaff />} />
              </Routes>
            <Footer />
        </div>
    );
}

export default App;