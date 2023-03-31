import './App.css';
import Publications from './pages/research/publications';

function App() {
  return (
    <div className="App">
      <div id="header">
        <nav>
          <div id="logo">
            <img src="./clg_logo.png" alt="" />
          </div>
          <div id="links">
            <div className="links-link">Training</div>
            <div className="links-link">Projects</div>
            <div className="links-link">Awards</div>
            <div className="links-link">Extra Curricular</div>
            <div className="links-link">Research</div>
            <div className="links-link">Faculty</div>
            <div className="links-link">About Us</div>
          </div>
          <div id="account">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-circle-user"></i>
          </div>
        </nav>
        <div id="hero">
          <img src="./hero.jpg" alt="" />
          <div className="hero-title">
            Department of Computer Science 
          </div>
          <div className="hero-subtitle">
            Sardar Patel Institute of Technology
          </div>
        </div>
      </div>
      <Publications />
      <div id="footer">
        <div id="footer-head">
          <div id="footer-head-logo">
            <img src="./clg_logo_black.png" alt="" />
          </div>
          <div id="footer-header-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
