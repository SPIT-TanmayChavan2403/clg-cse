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
import Department from './pages/about us/infrastructure/department';
import Workshops from './pages/extra_curricular/workshops';
import ProgramOutcomes from './pages/about us/ProgramOutcomes';
import ValueAddedCourse from './pages/extra_curricular/ValueAddedCourses';
import TeachingStaff from './pages/faculty/teachingStaff';
import { Projects } from './pages/projects/projects';

function App(props) {
    const [image, updateImage] = useState("hero.jpg");
    const location = useLocation();

    useEffect(() => {
        console.log(window.innerWidth);
        let url = location.pathname.split('/');
        let imageName = url.slice(location.pathname.split('/').length - 1);
        if (imageName[0] === ""){
            updateImage("./banner/hero.png")
        } else {
            updateImage('./banner/' + imageName + ".png")
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
                <Route path="/extra-curriculars/workshops" element={<Workshops />} />
                <Route path="/extra-curriculars/valueaddedcorses" element={<ValueAddedCourse />} />
                <Route path="/research/patents" element={<Patents />} />
                <Route path="/aboutus/objectives" element={<Objectives />} />
                <Route path="/aboutus/hodmessage" element={<HODMessage />} />
                <Route path="/aboutus/infrastructure/courseoutline" element={<CourseOutline />} />
                <Route path="/aboutus/infrastructure/programoutcomes" element={<ProgramOutcomes />} />
                <Route path="/aboutus/infrastructure/library" element={<Library />} />
                <Route path="/aboutus/infrastructure/department" element={<Department />} />
                <Route path="/faculty/technicalstaff" element={<TechnicalStaff />} />
                <Route path="/faculty/teachingstaff" element={<TeachingStaff />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            <Footer />
        </div>
    );
}

export default App;