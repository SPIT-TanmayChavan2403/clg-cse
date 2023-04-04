import styles from "../../styles/teachingStaff.module.css"
import { facultyData } from "../../metadata/facultyData"
import { Link } from "react-router-dom"
import { FiExternalLink } from 'react-icons/fi'

const FacultyCard = ({dept}) => {
    return (
        <div className={styles.container}>
                <h2 className={styles.facultyHeading}> Faculties for {dept} </h2>
                <div className={styles.cardContainer}>
                    {
                        facultyData[dept].map(item => (
                            <Link 
                            to={{
                                pathname: item.id,
                                state: item
                            }} 
                            className={styles.rrdLink}>
                                <div className={styles.card}>
                                    <img src={item.image} alt="" className={styles.cardImg} />
                                    <div className={styles.cardData}>
                                        <span className={styles.cardName}> {item.name} </span>
                                        <span className={styles.designation}> {item.designation}  </span>
                                        <span className={styles.qualification}> {item.qualification}  </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
    )
}

export default function TeachingStaff(props){
    const deptList = ["CSE-DS","CSE-AIML"];
    return(
        <div>
        {
        deptList.map(dept => (
            <FacultyCard dept={dept} />
        ))}
        <div className={styles.container}>
        <a href="https://mca.spit.ac.in/index.php/facult/" target="_blank" className={styles.facultyHeadingMCA}> Faculties for MCA <FiExternalLink />  </a>
        </div>
    </div>
    )
}
