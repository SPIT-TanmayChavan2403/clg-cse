import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	padding: .5rem;
	border-radius: 5px;
	color: black;
	text-decoration: none;

    &:hover{
        background-color: var(--bg-medium);
    }

	@media screen and (max-width: 992px){
		width: min-content;
	}
`;

function Header(props){

	function toggleMenu(){
		const links = document.getElementById("links");

		links.classList.toggle("active");
	}

	return(
		<div id="header">
	        <nav>
	          <div id="logo">
	            <Link to="/">
					<img src="./clg_logo.png" alt="" />
				</Link>
	          </div>
			  <div id="menu">
			  		<i id="menubtn" className="fa-solid fa-bars" onClick={toggleMenu}>
					</i>
					<div id="links">

						{/* link */}
						<div className="links-link">
						Training
						<div className="links-link-menu" onClick={toggleMenu}>
							<StyledLink to="/training/internship">
								Internship
							</StyledLink>
							<StyledLink to="training/placements">
								Placements
							</StyledLink>
						</div>
						</div>

						{/* link */}
						<div className="links-link">Projects</div>

						{/* link */}
						<div className="links-link">
						Awards
						<div className="links-link-menu" onClick={toggleMenu}>
							<StyledLink to="/awards/studentawards">
								Student Awards
							</StyledLink>
							<StyledLink to="/awards/facultyawards">
								Faculty Awards
							</StyledLink>
						</div>
						</div>

<<<<<<< Updated upstream
						{/* link */}
						<div className="links-link">
						Extra Curricular
						<div className="links-link-menu" onClick={toggleMenu}>
							<StyledLink to="training/placements">
							Workshops
							</StyledLink>
							<StyledLink to="training/placements">
								Guest Lectures
							</StyledLink>
							<StyledLink to="/extra-curriculars/committees">
								Committees
							</StyledLink>
							<StyledLink to="training/placements">
								Value added courses
							</StyledLink>
						</div>
						</div>
=======
	            {/* link */}
	            <div className="links-link">
	              Extra Curricular
	              <div className="links-link-menu">
				  	<StyledLink to="/extra-curriculars/workshops">
					  Workshops
					</StyledLink>
					<StyledLink to="training/placements">
						Guest Lectures
					</StyledLink>
					<StyledLink to="/extra-curriculars/committees">
						Committees
					</StyledLink>
					<StyledLink to="training/placements">
						Value added courses
					</StyledLink>
	              </div>
	            </div>
>>>>>>> Stashed changes

						{/* link */}
						<div className="links-link">
						Research
						<div className="links-link-menu" onClick={toggleMenu}>
							<StyledLink to="/research/patents">
								Patents
							</StyledLink>
							<StyledLink to="training/placements">
								Publications
							</StyledLink>
						</div>
						</div>

						{/* link */}
						<div className="links-link" >
						Faculty
						<div className="links-link-menu" onClick={toggleMenu}>
							<StyledLink to="training/placements">
								Teaching staff
							</StyledLink>
							<StyledLink to="/faculty/technicalstaff">
								Technical and support staff
							</StyledLink>
						</div>
						</div>

						{/* link */}
						<div className="links-link">
						About Us
						<div className="links-link-menu" onClick={toggleMenu}>
							<StyledLink to="/aboutus/objectives">
								Objectives
							</StyledLink>
							<StyledLink to="/aboutus/hodmessage">
								HOD message
							</StyledLink>
							<StyledLink to="training/placements">
								Program outcomes
							</StyledLink>
							<StyledLink to="/aboutus/infrastructure/courseoutline">
								Course outline
							</StyledLink>
							<StyledLink to="/aboutus/infrastructure/library">
								Library
							</StyledLink>
							<StyledLink to="/aboutus/infrastructure/library">
								Department
							</StyledLink>
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