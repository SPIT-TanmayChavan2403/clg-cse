import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Block = (number, index) => {
  return (
    <div id='block' key={index}>
      {number}
    </div>
  );
}

const VisitCount = ({visitors}) => {
  const v = String(visitors).split('');
  return (
    <div className='visitorsContainer'>
      {v.map((x, index) => {
        return ( Block(x, index) )
      })}
    </div>
  )
}

function Footer(props){

	const [visitors, setVisitors] = useState(0);

	const getVisitors = async () => {
		const { data } = await axios('https://api.countapi.xyz/update/spit.cse/spit/?amount=1');
		if(data != null || data != 0) {
			setVisitors(parseInt(data.value));
		}
	}

	useEffect(() => {
		getVisitors();
	}, []);

	return(
		<div id="footer">
	        <div id="footer-head">
				<div id="footer-head-logo">
					<img src="/assets/misc/spit-transparent-bg-logo.png" alt="" />
				</div>
				<div id="footer-head-socials">
					<i className="fa-brands fa-linkedin"></i>
					<i className="fa-brands fa-instagram"></i>
					<i className="fa-brands fa-facebook"></i>
				</div>
	        </div>

			<div id='footer-main'>
				<div id="footer-info-left">
					<div id="footer-info-title">
						Department of Computer Science and Engineering
					</div>
					<div id="footer-college-title">
						Sardar Patel Institute of Technology
					</div>
					<div className="footer-info-content">
						Bhavan's Campus, Munshi Nagar, Andheri (West), Mumbai 400 058
					</div>
					<div className="footer-info-content">
						Email: hod.cse@spit.ac.in
					</div>
				</div>
				<div id="footer-info-right">
					<div>
						{ visitors &&
						<div className='visitors'>
							<div>
							<span className='visitorsHeading'> Total Visitors </span>
							<VisitCount visitors={visitors} /> 
							</div>
						</div>
						}
					</div>
				</div>
			</div>

			<div id="footer-copyright">
				Copyrights &copy; 2023 | Department of CSE @ S.P.I.T.
			</div>
	     </div>
	)
}

export default Footer;