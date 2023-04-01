import React from 'react';
import styles from  '../../styles/committees.module.css';

function Committees(props){
	return(
		<div className={styles.outerWrapper}>
        	<div className={styles.topContainer}>
                <div className={styles.logoLeft}>
        	        <img src="./face-logo.png" alt="" />
                </div>
                <div className={styles.contentCenter}>
                    <p className={styles.weare}> WE ARE </p>
                    <p className={styles.face}> F.A.C.E </p>
                    <p className={styles.forum}> Forum for Aspiring </p>
                    <p className={styles.compeng}> Computer Engineers </p>
                </div>
                <div className={styles.logoRight}>
        	        <img src="./face-logo.png" alt="" />
                </div>
        	</div>
            <div className={styles.bottomContainer}>
                <div className={styles.aboutFaceHeading}>
                    <span> About </span> <span className={styles.textBlue}> F.A.C.E </span>
                </div>
                <div className={styles.aboutFace}>
                    <span>F.A.C.E is a techno-cultural committee of S.P.I.T that is exclusively for the Computer Engineering Department. We aim to make the learning fun with various engaging workshops. Some of our flagship events like Monsoon Trek, FACE Cup and Branch Day strengthen the bonds of friendship among Computer students along with working as fun distractor to their fully loaded minds. </span>
                </div>
            </div>
            <div className={styles.weblink}>
                Official Website &rsaquo; <a href="https://face.spit.ac.in" target='_blank' without rel='noreferrer' className={styles.link}> https://face.spit.ac.in </a>
            </div>
        </div>
	)
}

export default Committees;