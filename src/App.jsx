import './App.css';
import Home from './pages/home';
import { useState } from 'react';
import Internships from './pages/training/internship';
import HODMessage from './pages/about us/HODMessage';
import Objectives from './pages/about us/Objectives';
import Infrastructure from './pages/about us/Infrastructue';
import Placements from './pages/training/placements';
import Patents from './pages/research/patents';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
    const [ image, updateImage ] = useState("hero.jpg");
    
    return (
        <div className="App">
            <Header img={image}/>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/research/publications" element={<Patents />} />
                  <Route path="/research/placements" element={<Placements />} />
              </Routes>
            <Footer />
        </div>
    );
}

export default App;