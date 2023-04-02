import React from 'react';
import styles from "../../styles/studentAwards.module.css";

function StudentAwards(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>2020 - 2021</h1>
                    <div className={styles.section}>
                        <ImageBlock img="./awards/award4.png"/>
                        <ImageBlock img="./awards/award5.png"/>
                        <ImageBlock img="./awards/award6.png"/>
                        <ImageBlock img="./awards/award7.png"/>
                    </div>
                    <h1 className={styles.title}>2020 - 2021</h1>
                    <div className={styles.section}>
                        <ImageBlock img="./awards/award8.png"/>
                    </div>
                </div>
            </div>
        </div>
    )   
}

function ImageBlock(props){
    return(
        <div className={styles.imageBlockContainer}>
            <img className={styles.image} src={props.img} alt="Award" />
        </div>
    )
}

export default StudentAwards;