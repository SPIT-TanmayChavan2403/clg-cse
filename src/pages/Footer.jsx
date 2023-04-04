import React from 'react';

function Footer(props){
	return(
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

			<div id="footer-copyright">
				Copyrights &copy; 2023 | Department of CSE @ S.P.I.T.
			</div>

	     </div>
	)
}

export default Footer;