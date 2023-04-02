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
                    <Card data={{
                        heading: "2020-2021 Records", img:"./chart1.png", title: "Avg package around 12 lakhs for 2020-21"
                    }}/>
                    <Card data={{
                        heading: "2019-2020 Records", img:"./chart2.png", title: "All the students managed to get offer around 8 Lakhs per annum so far."
                    }}/>
                    <Card data={{
                        heading: "2018-2019 Records", img:"./chart3.png", title: "The Y-axis represents the CTC offered by each company"
                    }}/>
                    <Card data={{
                        heading: "2017-2018 Records", img:"./chart4.png", title: "The Y-axis represents the CTC offered by each company"
                    }}/>
                </div>
            </div>
        </div>
    )
}

function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.cardYearTitleCcontainer}>
                <h2 className={styles.cardYearTitle}>{props.data.heading}</h2>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.chartImage} alt="card" src={props.data.img} />
            </div>
            <div className={styles.title}>
                <h2> {props.data.title} </h2>
            </div>
        </div>
    )
}

export default Placements;