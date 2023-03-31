import React from "react";
import styles from  '../../styles/placements.module.css';

function Placements(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <div id={styles.text}>
                    <p>The department has a full-fledged placement cell in order to help students choose an appropriate career and improve their interpersonal skills. The Placement cell consists of faculty members and students, who work towards providing soft skill training, internships and final placements. The department has a dedicated team which works throughout the year to provide better placement to all the students in their area of interest.</p>
                </div>
                <div id={styles.cards}>
                    <Card />
                </div>
            </div>
        </div>
    )
}

function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.cardTitleCcontainer}>
                <h2 className={styles.cardTitle}>2020-2021 Records</h2>
            </div>
        </div>
    )
}

export default Placements;