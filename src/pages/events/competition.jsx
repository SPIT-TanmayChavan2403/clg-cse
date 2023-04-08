import React from 'react';
import styles from '../../styles/competitions.module.css';
import { eventsData } from '../../metadata/events';

function Competitions(props){
    return(
        <div className={styles.outerWrapper}>
            <h2 className={styles.title}> Competitions </h2>
            {
                eventsData["competitions"] && eventsData["competitions"] .length <= 0 ?
                    <img src="/assets/misc/coming-soon.png" className={styles.comingSoonImage} /> :
                    <div className={styles.wrapper}>
                        <div className={styles.container}>
                            {
                                eventsData["competitions"].map((item, index) => (
                                    <div className={styles.card} key={index}>
                                        <img src={item.banner} alt="" className={styles.banner} />
                                        <div className={styles.data}>
                                            <span className={styles.eventTitle}> An Expert Talk on <strong> {item.title} </strong> </span>
                                            <div className={styles.speaker}>
                                                <span className={styles.speakerName}> {item.speakerName} </span>
                                                <span className={styles.speakerDesignation}> {item.speakerDesignation} </span>
                                            </div>
                                            <div className={styles.eventDate}>
                                                <span className={styles.dateHeading}> Date:  </span>
                                                <span className={styles.dateValue}> {item.date} </span>
                                            </div>
                                            <div className={styles.eventTime}>
                                                <span className={styles.timeHeading}> Time:  </span>
                                                <span className={styles.timeValue}> {item.time} </span>
                                            </div>
                                            <a href={item.document} target="_blank" className={styles.document}> View Details </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Competitions;