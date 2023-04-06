import React from 'react';
import styles from '../../styles/experttalks.module.css'

function ExpertTalks(props){
    return(
        <div className="outer-wrapper">
            <div className={styles.outerWrapper}>
                <h2 className={styles.title}> Expert Talks </h2>
                <img src="/coming-soon.png" className={styles.comingSoonImage} />
            </div>
        </div>
    )
}

export default ExpertTalks;