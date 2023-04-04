import React from 'react';
import styles from '../../styles/guesttalks.module.css'

function GuestTalks(props){
    return(
        <div className="outer-wrapper">
            <div className={styles.outerWrapper}>
                <h2 className={styles.title}> Guest Talks </h2>
                <img src="/coming-soon.png" className={styles.comingSoonImage} />
            </div>
        </div>
    )
}

export default GuestTalks;