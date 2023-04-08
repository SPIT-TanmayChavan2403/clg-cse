import './App.css';
import Home from './pages/home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {Routes, Route, Navigate } from 'react-router-dom';
import Workshops from './pages/events/workshops';
import ExpertTalks from './pages/events/expertTalks';
import ValueAddedCourse from './pages/events/valueAddedCourses';
import TeachingStaff from './pages/faculty/teachingStaff';
import AboutUs from './pages/about us/aboutus';
import FacultyInfo from './pages/faculty/facultyInfo';
import AimlAcademics from './pages/academics/aimlAcademics';
import DsAcademics from './pages/academics/dsAcademics';
import Competitions from './pages/events/competition';
import { PageNotFound } from './pages/PageNotFound';

function App(props) {

    return (
        <div className="App">
            <Header alt="header"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/faculty" element={<TeachingStaff />} />
                <Route path="/faculty/cse-ds/:slug" element={<FacultyInfo />} />
                <Route path="/faculty/cse-aiml/:slug" element={<FacultyInfo />} />
                <Route path="/cse-aiml/" element={<AimlAcademics />} />
                <Route path="/cse-ds/" element={<DsAcademics />} />
                <Route path="/academics/aiml" element={<AimlAcademics />} />
                <Route path="/academics/ds" element={<DsAcademics />} />
                <Route path="/events/value-added-courses" element={<ValueAddedCourse />} />
                <Route path="/events/expert-talks" element={<ExpertTalks />} />
                <Route path="/events/workshops" element={<Workshops />} />
                <Route path="/events/competitions" element={<Competitions />} />
                <Route path="/404-page-not-found" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404-page-not-found" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;