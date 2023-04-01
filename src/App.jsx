import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <div id="header">
        <nav>
          <div id="logo">
            <img src="./clg_logo.png" alt="" />
          </div>
          <div id="links">

            {/* link */}
            <div className="links-link">
              Training
              <div className="links-link-menu">
                <div className="links-link-menu-item">
                  Internship
                </div>
                <div className="links-link-menu-item">
                  Placements
                </div>
              </div>
            </div>

            {/* link */}
            <div className="links-link">Projects</div>

            {/* link */}
            <div className="links-link">
              Awards
              <div className="links-link-menu">
                <div className="links-link-menu-item">
                  Student Awards
                </div>
                <div className="links-link-menu-item">
                  Faculty Awards
                </div>
              </div>
            </div>

            {/* link */}
            <div className="links-link">
              Extra Curricular
              <div className="links-link-menu">
                <div className="links-link-menu-item">
                  Workshops
                </div>
                <div className="links-link-menu-item">
                  Guest Lectures
                </div>
                <div className="links-link-menu-item">
                  Committees
                </div>
                <div className="links-link-menu-item">
                  Value added courses
                </div>
              </div>
            </div>

            {/* link */}
            <div className="links-link">
              Research
              <div className="links-link-menu">
                <div className="links-link-menu-item">
                  Patents
                </div>
                <div className="links-link-menu-item">
                  Publications
                </div>
              </div>
            </div>

            {/* link */}
            <div className="links-link">
              Faculty
              <div className="links-link-menu">
                <div className="links-link-menu-item">
                  Teaching staff
                </div>
                <div className="links-link-menu-item">
                  Technical and support staff
                </div>
              </div>
            </div>

            {/* link */}
            <div className="links-link">
              About Us
              <div className="links-link-menu">
                <div className="links-link-menu-item">
                  Objectives
                </div>
                <div className="links-link-menu-item">
                  HOD message
                </div>
                <div className="links-link-menu-item">
                  Program outcomes
                </div>
                <div className="links-link-menu-item">
                  Course outline
                </div>
                <div className="links-link-menu-item">
                  Infrastructure
                </div>
              </div>
            </div>
            
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
      <main>
        <Home />
      </main>
      <div id="footer">
        <div id="footer-head">
          <div id="footer-head-logo">
            <img src="./clg_logo_black.png" alt="" />
          </div>
          <div id="footer-head-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div id="footer-info">
          <div id="footer-info-title">
            Sardar Patel Institute of Technology
          </div>
          <div className="footer-info-content">
            Bhavan's Campus, Munshi Nagar, Andheri (West), Mumbai 400 058
          </div>
          <div className="footer-info-content">
          Contact Numbers: 9930362034, 9930362014, 9930309463
          </div>
          <div className="footer-info-content">
          Email: principal@spit.ac.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
