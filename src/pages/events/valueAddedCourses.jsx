import React from 'react';
import styles from  '../../styles/valueaddedcourse.module.css';

function ValueAddedCourse(props) {

	return(
		<div className={styles.outerWrapper}>
            <h2 className={styles.title}> Value Added Courses </h2>
            <img src="/assets/misc/coming-soon.png" className={styles.comingSoonImage} />
        </div>
	)
}

export default ValueAddedCourse;