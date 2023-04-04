import styles from '../../styles/academics.module.css'

export default function AimlAcademics(){
    return(
        <div id={styles.aiml}>
            <div className={styles.row}>
                <div className={styles.heading}>Timetable</div>
                <div className={styles.listitem}>
                    Timetable for AIML <a href="https://www.spit.ac.in/wp-content/uploads/2023/03/SE-AIML.pdf">SEM IV</a>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.heading}>Syllabus</div>
                <div className={styles.listitem}>
                    Syllabus for AIML <a href="https://library.spit.ac.in/AS2021-22/aiml-sem-1-4-2021.pdf">SEM I-IV</a>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.heading}>Exams</div>
                <div className={styles.listitem}>
                    Coming soon
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.heading}>Placements</div>
                <div className={styles.listitem}>
                    For placements data click <a href="/placements">here!</a>
                </div>
            </div>

            <div className={styles.row}>
            <div className={styles.heading}>Internship</div>
                <div className={styles.listitem}>
                    For internship data click <a href="/internship">here!</a>
                </div>
            </div>

            <div className={styles.row}>
            <div className={styles.heading}>Projects</div>
                <div className={styles.listitem}>
                    Coming soon
                </div>
            </div>
        </div>
    )
}