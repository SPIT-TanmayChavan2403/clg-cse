import React, { useState } from 'react';
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

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	}

	return(
		<div id="header">
	        <nav>
	          <div id="logo">
	            <Link to="https://www.spit.ac.in/">
					<img src="/assets/misc/clg-logo.png" alt="" />
				</Link>
	          </div>
			  <div id="d-menu">
			  	<div id="links" className={open ? "#links active" : "#links"}>
					{/* link */}
					<div className="links-link" onClick={()=>{navigate('/'); handleClick()}} >
						home
					</div>

					{/* link */}
					<div className="links-link" onClick={()=>{navigate('/about-us'); handleClick()}}>
						About us
					</div>

					{/* link */}
					<div className="links-link">
						Academics
						<div className="links-link-menu">
							<StyledLink to="/cse-aiml/" onClick={handleClick}>
								UG AIML
							</StyledLink>
							<StyledLink to="/cse-ds/" onClick={handleClick}>
								UG DS
							</StyledLink>
							<StyledLink to="https://mca.spit.ac.in/" target='_blank' onClick={handleClick}>
								PG MCA
							</StyledLink>
						</div>
					</div>

					{/* link */}
					<div className="links-link" onClick={()=>{navigate('/faculty'); handleClick()}}>
						faculty
					</div>

					{/* link */}
					<div className="links-link">
						events
						<div className="links-link-menu">
							<StyledLink to="/events/competitions" onClick={handleClick}>
								Competitions
							</StyledLink>
							<StyledLink to="/events/workshops" onClick={handleClick}>
								workshops
							</StyledLink>
							<StyledLink to="/events/expert-talks" onClick={handleClick}>
								Expert talks
							</StyledLink>
							<StyledLink to="/events/value-added-courses" onClick={handleClick}>
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
			  <div id="mobile" onClick={handleClick}>
				<i id="bar" className={open ? "fas fa-times" : "fas fa-bars"}></i>
			  </div>
	        </nav>
	        <div id="hero">
				<div className='hero-background'>
					<div className="hero-title">
						Department of Computer Science and Engineering
					</div>
					{/* <div className="hero-subtitle">
						Sardar Patel Institute of Technology
					</div> */}
			  </div>
	        </div>
	      </div>
	)
}

export default Header;