import styles from '../../styles/facultyinfo.module.css'
import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';
import { facultyData } from '../../metadata/facultyData';


export default function FacultyInfo(){

    const location = useLocation();
    const [info, setInfo] = useState({});

    useEffect(() => {
        const url = location.pathname.split('/');
        console.log(url)
        const dept = url[2].toUpperCase();
        const id = url[3];
        const res = facultyData[dept].filter(obj => {
          return obj.id === id
        })
        if(res.length > 0) {
          setInfo(res[0]);
        }
        window.scrollTo(0, 500)
    }, [])

    return(
        <div id={styles.facultyinfo}>
            {info!=={} && 
            <>
                <div className={styles.title}>
                    {info.name}
                </div>
                <div id={styles.img}>
                    <img src={info.image} alt="" />
                </div>
                <div className={styles.subtitle}>
                    <strong> {info.designation} </strong> <br />
                    {info.education && Object.values(info.education).map(item => (
                        <span key={item}>
                            {item}
                            <br />
                        </span>
                    ))}
                </div>
                <div className={styles.mainData}>
                    {info.data && Object.keys(info.data).map((key, index) => {
                        return (
                        <div className={styles.dataContainer} key={index}>
                            <h2 className={styles.heading}> {key} </h2>
                            <ul className={styles.list}>
                                {
                                    Object.values(info.data[key]).map(item => (
                                        <li>
                                        {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        );
                    })}
                    <div className={styles.mainData}>
                        <div className={styles.dataContainer}>
                            <h2 className={styles.heading}> Contact Information </h2>
                            <div className={styles.contactInfo}>
                                {
                                    info.contact && Object.values(info.contact).map(item => (
                                        <span key={item}>
                                            {item}
                                            <br />
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                </div>
                </div>
            </>
            }
        </div>
    )
}