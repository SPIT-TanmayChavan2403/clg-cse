import { useEffect, useState } from "react";
import { academics } from "../../metadata/academicsData";
import styles from '../../styles/academics/academics.module.css'

const TimeTable = ({dept}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(academics[dept]['timetable'])
    }, []);

    return (
        <div>
            <h2> Time Table </h2>
            <br />
            {
                data !==[] && data.map((item, index) => (
                    <ul className={styles.academicLinks} key={index}>
                        <li> <a href={item.link} target="_blank" rel="noreferrer"> {item.title} </a> </li>
                    </ul>
                ))
            }
        </div>
    );
}

export default TimeTable;