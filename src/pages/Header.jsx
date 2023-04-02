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
`;

function Header(props){
	return(
		<div id="header">
	        <nav>
	          <div id="logo">
	            <Link to="/">
					<img src="./clg_logo.png" alt="" />
				</Link>
	          </div>
	          <div id="links">

	            {/* link */}
	            <div className="links-link">
	              Training
	              <div className="links-link-menu">
				  	<StyledLink to="/training/internship">
						Internship
					</StyledLink>
					<StyledLink to="research/placements">
						Placements
					</StyledLink>
	              </div>
	            </div>

	            {/* link */}
	            <div className="links-link">Projects</div>

	            {/* link */}
	            <div className="links-link">
	              Awards
	              <div className="links-link-menu">
				  	<StyledLink to="research/placements">
				  		Student Awards
					</StyledLink>
					<StyledLink to="research/placements">
						Faculty Awards
					</StyledLink>
	              </div>
	            </div>

	            {/* link */}
	            <div className="links-link">
	              Extra Curricular
	              <div className="links-link-menu">
				  	<StyledLink to="research/placements">
					  Workshops
					</StyledLink>
					<StyledLink to="research/placements">
						Guest Lectures
					</StyledLink>
					<StyledLink to="/extra-curriculars/committees">
						Committees
					</StyledLink>
					<StyledLink to="research/placements">
						Value added courses
					</StyledLink>
	              </div>
	            </div>

	            {/* link */}
	            <div className="links-link">
	              Research
	              <div className="links-link-menu">
				  	<StyledLink to="research/placements">
						Patents
					</StyledLink>
					<StyledLink to="research/placements">
						Publications
					</StyledLink>
	              </div>
	            </div>

	            {/* link */}
	            <div className="links-link">
	              Faculty
	              <div className="links-link-menu">
				  	<StyledLink to="research/placements">
						Teaching staff
					</StyledLink>
					<StyledLink to="research/placements">
						Technical and support staff
					</StyledLink>
	              </div>
	            </div>

	            {/* link */}
	            <div className="links-link">
	              About Us
	              <div className="links-link-menu">
				  	<StyledLink to="/aboutus/objectives">
						Objectives
					</StyledLink>
					<StyledLink to="research/placements">
						HOD message
					</StyledLink>
					<StyledLink to="research/placements">
						Program outcomes
					</StyledLink>
					<StyledLink to="/aboutus/infrastructure/courseoutline">
						Course outline
					</StyledLink>
					<StyledLink to="/aboutus/infrastructure/library">
						Infrastructure
					</StyledLink>
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