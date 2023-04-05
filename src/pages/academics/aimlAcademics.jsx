import { useNavigate } from 'react-router-dom';
import styles from '../../styles/academics.module.css'
import { useState } from 'react';

export default function AimlAcademics() {

    let navigate = useNavigate();
    const [selected, setSelected] = useState('time-table');

    const handleClick = (type) => {
        console.log(type)
        if(type == 'time-table') {
            setSelected('time-table')
            console.log('tt')
        }
        if(type == 'syllabus') {
            setSelected("syllabus")
        }
        if(type == 'results') {
            setSelected("results")
        }
        if(type == 'projects') {
            setSelected("projects")
        }
    }

    return(
        <div className={styles.gridContainer}>
            <div className={styles.gridLeft}>
                <button onClick={() => {handleClick('time-table')}}> Time Table </button>
                <button onClick={() => handleClick('syllabus')}> Syllabus </button>
                <button onClick={() => handleClick('results')}> Results </button>
                <button><a href="https://www.spit.ac.in/wp-content/uploads/2022/03/Placement-Stats_2021-2022_Final-Website21.pdf" target='_blank'> Placements </a> </button>
                <button> <a href="https://www.spit.ac.in/wp-content/uploads/2022/03/Placement-Stats_2021-2022_Final-Website21.pdf" target='_blank'> Internships </a>  </button>
                <button onClick={() => handleClick('projects')}> Projects </button>
            </div>
            <div className={styles.gridRight}>
                <div id={styles.data}>
                    {
                        selected === 'time-table' &&
                        <div>
                            <ul>
                                <li> <a href="https://www.spit.ac.in/wp-content/uploads/2023/03/SE-AIML.pdf" target="_blank">SE AIML Sem IV 2022-23</a> </li>
                            </ul>
                        </div>
                    }
                    {
                        selected === 'syllabus' &&
                        <div>
                            <ul>
                                <li> <a href="https://library.spit.ac.in/AS2021-22/aiml-sem-1-4-2021.pdf" target="_blank">UG Syllabus - 2021-22 CSE-AIML Sem I-IV</a> </li>
                            </ul>
                        </div>
                    }
                    {
                        selected === 'results' &&
                        <div>
                            <h2> Coming Soon </h2>
                        </div>
                    }
                    {
                        selected === 'projects' &&
                        <div>
                            <h2> Coming Soon </h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}