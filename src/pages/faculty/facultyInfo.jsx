import styles from '../../styles/facultyinfo.module.css'
import { useLocation } from "react-router-dom"
import { nanoid } from "nanoid";


export default function FacultyInfo(){

    const { state } = useLocation();

    const areaOfInterest = state.data["Area of Interests"]?.map(item => {
        return <li key={nanoid()}>{item}</li>
    });

    const certificationDone = state.data["Certification Done"]?.map(item => {
        return <li key={nanoid()}>{item}</li>
    });

    const researchGrantProjects = state.data["Research Grant Projects"]?.map(item => {
        return <li key={nanoid()}>{item}</li>
    });

    const booksPublished = state.data["Books Published"]?.map(item => {
        return <li key={nanoid()}>{item}</li>
    });

    const other = state.data["Other"]?.map(item => {
        return <li key={nanoid()}>{item}</li>
    });
    

    const contactInformation = <li key={nanoid()}>{state.data["Contact Information"]}</li>


    return(
        <div id={styles.facultyinfo}>
            <div id={styles.header}>
                <div id={styles.img}>
                    <img src={state.image} alt="" />
                </div>
                <div id={styles.head_desc}>
                    <div className={styles.title}>
                        {state.name}
                    </div>
                    <div className={styles.subtitle}>
                        {state.education}
                    </div>
                </div>
            </div>
            <div id={styles.info}>

                {areaOfInterest?.length>0 &&
                <div className={styles.container}>
                    <div className={styles.heading}>Area of Interest</div>
                    <ul>
                        {areaOfInterest}
                    </ul>
                </div>}

                {certificationDone?.length>0 && 
                <div className={styles.container}>
                    <div className={styles.heading}>Certifications</div>
                    <ul>
                        {certificationDone}
                    </ul>
                </div>}

                {researchGrantProjects?.length>0 && 
                <div className={styles.container}>
                    <div className={styles.heading}>Research Grant Projects</div>
                    <ul>
                        {researchGrantProjects}
                    </ul>
                </div>}

                {booksPublished?.length>0 && 
                <div className={styles.container}>
                    <div className={styles.heading}>Research Grant Projects</div>
                    <ul>
                        {booksPublished}
                    </ul>
                </div>}

                {other?.length>0 && 
                <div className={styles.container}>
                    <div className={styles.heading}>Other</div>
                    <ul>
                        {other}
                    </ul>
                </div>}

                <div className={styles.container}>
                    <div className={styles.heading}>Contact Information</div>
                    <ul>
                        {contactInformation}
                    </ul>
                </div>
            </div>
        </div>
    )
}