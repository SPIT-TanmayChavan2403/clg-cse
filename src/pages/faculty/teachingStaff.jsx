import styles from "../../styles/teachingStaff.module.css"

export default function TeachingStaff(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.image1}>
                        <img src="./profile.png" alt="Profile" height="250" width="200"/>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.header}>Dr. Dhananjay Kalbande <br />
                            Professor & Head of Department <br />
                        </p>
                        <p className={styles.intro}> Post-Doctorate (TISS), Ph.D.,M.E.(I.T.), B.E.(Comp.)Senior Research Fellow <br />
                            (NCW-TISS Project,T.I.S.S., Mumbai) <br />
                            Research Fellow (T.I.S.S. and M.I.T.(USA), CLIx-Project, Mumbai) <br />
                            Tel: +91 (22) - 26707440 Ext:366 <br />
                            Email: drkalbande@spit.ac.in <br />
                            Research Interests: Soft Computing, Machine Learning, Deep Learning, <br />
                            Human Machine Interaction, User Experience Design, Artificial Intelligence <br />
                            for Social and Healthcare cause, Data and Image Analytics <br />
                            Innovative Teaching Learning: Group Discussion (2020), Presentation (2019)
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div className={styles.container}>
                    <div className={styles.image1}>
                        <img src="./profile.png" alt="Profile" height="250" width="200" />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.header}>Dr. Sudhir Namdeorao Dhage <br />
                            Professor & Dean-Administration <br /></p>

                        <p className={styles.intro}> Qualification : Ph.D.(Technology) in Computer Engineering (VJTI, Mumbai), <br />
                            M.E. (CSE), B.E. (CSE) <br />
                            Ex. Regional Student Coordinator (CSI Region VI: Maharashtra and Goa) <br />
                            Tel: +91 (22) - 26707440 Ext:370 <br />
                            Email: sudhir_dhage@spit.ac.in <br />
                            Research Interests: Algorithms, Big Data Analytics, Data Mining, <br />
                            Machine Learning, Parallel and Distributed systems, Networks, <br />
                            Wireless Communication Networks, Pattern Recognition, Br /ain Cognitive Science <br />
                            Innovative Teaching Learning: Group Discussion (2020), Presentation (2019)
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <div className={styles.container}>
                    <div className={styles.image1}>
                        <img src="./profile.png" alt="Profile" height="250" width="200"/>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.header}>Dr. Preetida Vinayakray Jani <br />
                            Professor <br /></p>

                        <p className={styles.intro}> PhD (Electrical Engineering - University of Technology, Sydney, <br />
                            AustraliaM.Eng.Sc (Digital Communication) University of New South Wales <br />
                            Research Fellow (T.I.S.S. and M.I.T.(USA), CLIx-Project, Mumbai) <br />
                            Tel: +91 (22) - 26707440 Ext:366 <br />
                            Email: drkalbande@spit.ac.in <br />
                            Research Interests: Soft Computing, Machine Learning, Deep Learning, <br />
                            Human Machine Interaction, User Experience Design, Artificial Intelligence <br />
                            for Social and Healthcare cause, Data and Image Analytics, IOT for Rural Healthcare. <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

