import React from 'react';
import styles from '../../styles/workshops.module.css'

function Workshops(props){
    return(
        <div className="outer-wrapper">
            <div className={styles.outerWrapper}>
                <h2 className={styles.title}> Workshops </h2>
                <img src="/assets/misc/coming-soon.png" alt="" className={styles.comingSoonImage} />
            </div>
        </div>
    )
}

export default Workshops;