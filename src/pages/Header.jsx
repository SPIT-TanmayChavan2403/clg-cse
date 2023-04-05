import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
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

function Header(){

	let navigate = useNavigate();

	// function toggleMenu(){
	// 	const links = document.getElementById("links");

	// 	links.classList.toggle("active");
	// }

	return(
		<div id="header">
	        <nav>
	          <div id="logo">
	            <Link to="/">
					<img src="./clg_logo.png" alt="" />
				</Link>
	          </div>
			  <div id="d-menu">
			  	<div id="links">
					{/* link */}
					<div className="links-link"onClick={()=>{navigate('/')}} >
						home
					</div>

					{/* link */}
					<div className="links-link" onClick={()=>{navigate('/aboutus')}}>
						About us
					</div>

					{/* link */}
					<div className="links-link">
						Academics
						<div className="links-link-menu">
							<StyledLink to="/cse-aiml/">
								UG AIML
							</StyledLink>
							<StyledLink to="/cse-ds/">
								UG DS
							</StyledLink>
							<StyledLink to="https://mca.spit.ac.in/">
								PG MCA
							</StyledLink>
						</div>
					</div>

					{/* link */}
					<div className="links-link" onClick={()=>{navigate('/faculty')}}>
						faculty
					</div>

					{/* link */}
					<div className="links-link">
						events
						<div className="links-link-menu">
							<StyledLink to="/events/workshops">
								workshops
							</StyledLink>
							<StyledLink to="/events/guest-talks">
								Guest talk
							</StyledLink>
							<StyledLink to="/events/value-added-courses">
								value added courses
							</StyledLink>
						</div>
					</div>

					{/* link */}
					<div className="links-link">
						committees
						<div className="links-link-menu">
							<StyledLink to="http://itsa.spit.ac.in/" target="_blank">
								ACSES
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
	          <img src="./banner/spit-banner.jpg" alt="" />
	          <div className="hero-title">
	            Department of Computer Science and Engineering
	          </div>
	          <div className="hero-subtitle">
	            Sardar Patel Institute of Technology
	          </div>
	        </div>
	      </div>
	)
}

export default Header;