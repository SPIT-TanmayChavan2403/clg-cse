import React from 'react';
import styles from  '../../styles/valueaddedcourse.module.css';

function ValueAddedCourse(props){

    const scope_data = [
        {
            heading: "Banking And Finance: Understanding Stock Markets & Investments in Securities- Module III:",
            desc: "The entire course was conducted by Dr. Sangeeta Pandit and Mr. Purve Shah. The 12 students from TE IT enrolled in the course. The course was conducted from Aug-2018 to Oct-2018."
        },
        {
            heading: "Banking And Finance: Management Accounting- Module II:",
            desc: "The entire course was conducted by Dr. Sangeeta Pandit and Mr. Raj Shah. The 10 students from SE IT enrolled in the course. The course was conducted from Feb-2018 to Apr-2018."
        },
        {
            heading: "Applied Algorithms and Data Structures with Java- Module-II :",
            desc: "The entire course was conducted by Morgan Stanley. The 40 students from SE of all branches & MCA (1st year) enrolled in the course. The course was conducted from 23-Jan-18 to 10-Apr-18."
        },
        {
            heading: "Applied Algorithms and Data Structures with Java- Module-I :",
            desc: "The entire course was conducted by Morgan Stanley. The 40 students from SE of all branches & MCA (1st year) enrolled in the course. The course was conducted from 28-Aug-17 to 3-Nov-17."
        },
        {
            heading: "Banking And Finance: Financial Accounting- Module I:",
            desc: "The entire course was conducted by Dr. Sangeeta Pandit. The 27 students from SE IT enrolled in the course. The course was conducted from Aug-2017 to Oct-2017."
        },
        {
            heading: "Banking And Finance: Financial Accounting- Module I:",
            desc: "The entire course was conducted by Dr. Sangeeta Pandit. The 27 students from SE IT enrolled in the course. The course was conducted from Aug-2017 to Oct-2017."
        },
        {
            heading: "Banking And Finance: Financial Accounting- Module I:",
            desc: "The entire course was conducted by Dr. Sangeeta Pandit. The 27 students from SE IT enrolled in the course. The course was conducted from Aug-2017 to Oct-2017."
        },
        {
            heading: "Banking And Finance: Financial Accounting- Module I:",
            desc: "The entire course was conducted by Dr. Sangeeta Pandit. The 27 students from SE IT enrolled in the course. The course was conducted from Aug-2017 to Oct-2017."
        }
    ];

	return(
		<div className={styles.outerWrapper}>
            <div className={styles.content}>
                <ol className={styles.ol}>
                    <li className={styles.liHeading}> <span className={styles.listContentHeading}> SCOPE (SKILL CERTIFICATION FOR OUTCOME BASED PROFESSIONAL EDUCATION) COURSES: </span> </li>
                </ol>
                <ol className={styles.ol}>
                {
                    scope_data.map((item) => (
                        <li className={styles.li}> 
                            <span className={styles.listContent}> 
                                {item.heading}
                                <div className={styles.space}></div>
                                {item.desc} 
                            </span> 
                        </li>
                    ))
                }
                </ol>
            </div>
        </div>
	)
}

export default ValueAddedCourse;