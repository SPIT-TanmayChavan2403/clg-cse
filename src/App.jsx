import './App.css';
import Home from './pages/home';
import Publications from './pages/research/publications';
import Placements from './pages/training/placements';
import Internships from './pages/training/internship';
import HODMessage from './pages/about us/HODMessage';
import Objectives from './pages/about us/Objectives';
import Infrastructure from './pages/about us/Infrastructue';

function App() {
  return (
    <div className="App">
        {/* <Home /> */}
        {/* <HODMessage /> */}
        {/* <Objectives /> */}
        <Infrastructure />
    </div>
  );
}

export default App;
