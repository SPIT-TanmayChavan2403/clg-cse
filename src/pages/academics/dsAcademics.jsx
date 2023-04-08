import { useNavigate } from 'react-router-dom';
import styles from '../../styles/academics.module.css'
import { useState } from 'react';
import { Accordion } from './Accordion';

export default function DsAcademics() {
    const [selected, setSelected] = useState('time-table');

    return(
        <div className={styles.outerContainer}>
            <Accordion selected={selected} setSelected={setSelected} className={styles.gridLeft} />
            <div className={styles.gridRight}>
                <div id={styles.data}>
                    {
                        selected === 'time-table' &&
                        <div>
                            <h2> Syllabus </h2>
                            <br />
                            <ul className={styles.academicLinks}>
                                <li> <a href="https://www.spit.ac.in/wp-content/uploads/2023/03/SE-DS.pdf" target="_blank">SE DS Sem IV 2022-23</a> </li>
                            </ul>
                        </div>
                    }
                    {
                        selected === 'syllabus' &&
                        <div>
                            <h2> Syllabus </h2>
                            <br />
                            <ul className={styles.academicLinks}>
                                <li> <a href="https://library.spit.ac.in/AS2021-22/ds-sem-1-4-2021.pdf" target="_blank">UG Syllabus - 2021-22 CSE-DS Sem I-IV</a> </li>
                            </ul>
                        </div>
                    }
                    {
                        selected === 'results' &&
                        <div>
                            <h2> Results </h2>
                            <br />
                            <p> Coming Soon ... </p>
                        </div>
                    }
                    {
                        selected === 'projects' &&
                        <div>
                            <h2> Projects </h2>
                            <br />
                            <p> Coming Soon ... </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}