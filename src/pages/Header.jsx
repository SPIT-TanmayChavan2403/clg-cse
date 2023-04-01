import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){
	return(
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
	                  	<Link to="/training/internship">Internship</Link>
	                </div>
	                <div className="links-link-menu-item">
						<Link to="research/placements">Placements</Link>
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
	                  <a href="/research/patents">Patents</a>
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
	                  <Link to="/aboutus/objectives">Objectives</Link>
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
	                  <Link to="/aboutus/infrastructure/library">Infrastructure</Link>
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
	          <img src={props.img} alt="" />
	          <div className="hero-title">
	            Department of Computer Science 
	          </div>
	          <div className="hero-subtitle">
	            Sardar Patel Institute of Technology
	          </div>
	        </div>
	      </div>
	)
}

export default Header;