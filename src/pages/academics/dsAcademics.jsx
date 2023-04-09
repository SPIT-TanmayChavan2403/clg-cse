import styles from '../../styles/academics/academics.module.css'
import { useState } from 'react';
import { Accordion } from './Accordion';
import TimeTable from './TimeTable';
import Syllabus from './Syllabus';

export default function DsAcademics() {
    const [selected, setSelected] = useState('time-table');

    return(
        <div className={styles.outerContainer}>
            <Accordion selected={selected} setSelected={setSelected} className={styles.gridLeft} />
            <div className={styles.gridRight}>
                <div id={styles.data}>
                    {
                        selected === 'time-table' &&
                        <TimeTable dept='CSE-DS' />
                    }
                    {
                        selected === 'syllabus' &&
                        <Syllabus dept='CSE-DS' />
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