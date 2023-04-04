import './App.css';
import Home from './pages/home';
import Internships from './pages/training/internship';
import HODMessage from './pages/about us/HODMessage';
import Library from './pages/about us/infrastructure/library'
import Objectives from './pages/about us/Objectives';
import Placements from './pages/training/placements';
import Patents from './pages/research/patents';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {Routes, Route } from 'react-router-dom';
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
import AboutUs from './pages/about us/aboutus';
import FacultyInfo from './pages/faculty/facultyInfo';
import AimlAcademics from './pages/academics/aimlAcademics';
import DsAcademics from './pages/academics/dsAcademics';

function App(props) {

    return (
        <div className="App">
            
            <Header alt="header"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/faculty" element={<TeachingStaff />} />
                <Route path="/faculty/info" element={<FacultyInfo />} />
                <Route path="/academics/aiml" element={<AimlAcademics />} />
                <Route path="/academics/ds" element={<DsAcademics />} />
                <Route path="/internship" element={<Internships />} />
                <Route path="/placements" element={<Placements />} />







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
                <Route path="/projects" element={<Projects />} />
              </Routes>
            <Footer />
        </div>
    );
}

export default App;