import './App.css';
import Home from './pages/home';
import Publications from './pages/research/publications';
import Placements from './pages/training/placements';
import Internships from './pages/training/internship';

function App() {
  return (
    <div className="App">
        {/*<Home />*/}
        {/* <Publications /> */}
        {/*<Placements />*/}
      <Internships />
    </div>
  );
}

export default App;
