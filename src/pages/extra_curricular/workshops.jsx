import React from 'react';
import styles from '../../styles/workshops.module.css'

function Workshops(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <Block img="/machineLearning.jpg" name="Maching Learning using Python"
                    year="2018-2019"
                    text="One week Short term training program on Hands on: Machine Learning using Python, conducted during 2nd July to 7th July 2018. Workshop mainly focused on hands on practices and research areas in the field of Machine learning. The invited speakers are renouned experts from industries who have explored the topics of Machine learning with respect to realtime case studies and applications very well. Workshop got successfully completed with 20+ participants enrolled including faculties and students."
                />
                <Block img="/bigData.jpg" name="Cognos Tool"
                    year="2016 - 2017"
                    text="Two weeks ISTE-STTP on Parallel Processing & Big Data Analytics during June 29 - July 10, 2015. One week training on IBM Cognos Tool during Oct 24 - 28, 2015."
                />
            </div>
        </div>
    )
}

function Block(props){
    return(
        <div className={styles.section}>
            <div className={styles.imageContainer}>
                <img src={props.img} alt="Staff" className={styles.image} />
            </div>
            <div className={styles.textInnerContainer}>
                <div className={styles.textInnerContainer}>
                    <div className={styles.name}>
                        <h2> {props.name} </h2>
                    </div>
                    <div className={styles.year}>
                        <h2> {props.year} </h2>
                    </div>
                    <div className={styles.text}>
                        {props.text}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workshops;