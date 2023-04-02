import './App.css';
import Home from './pages/home';
import Publications from './pages/research/publications';
import Placements from './pages/training/placements';
import Internships from './pages/training/internship';
import { Program_Outcomes2 } from './pages/about us/program_outcomes2';
import Footer from './pages/Footer';
import Headers from './pages/Header';

function App() {
  return (
    <div className="App">
        {/*<Home />*/}
        {/* <Publications /> */}
        {/*<Placements />*/}
      {/* <Internships /> */}
      <Headers/>
      <Program_Outcomes2/>
      <Footer/>
    </div>
  );
}

export default App;
