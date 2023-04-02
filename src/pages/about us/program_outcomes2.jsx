import React from "react";
import styles from '../../styles/about us/program_outcomes2.module.css';

export function Program_Outcomes2(props) {

    return (
        <div className={styles.outerWrapper}>
            <div className={styles.container}>
                <div id={styles.path}>
                    <p>About Us &gt; <span className={styles.activeLink}>Program Outcomes </span> &gt; </p>
                </div>
                <div className={styles.contents}>
                    <Card data={{
                            programTitle: "PEOs",
                            tagHeading: "PEO",
                            descriptionHeading: "Description",
                            panelContents: [
                                {
                                    tag: "PEO 1",
                                    description: "Globally Competent engineers"
                                },
                                {
                                    tag: "PEO 2",
                                    description: "Able to sustain the quest for learning and pursue higher studies"
                                },
                                {
                                    tag: "PEO 3",
                                    description: "Able to solve the contemporary issues using the technology and by adopting the changes in the eco system"
                                },
                                {
                                    tag: "PEO 4",
                                    description: "Working professionals with social and ethical responsibilities"
                                }
                            ]
                        }} />
                    <Card data={{
                            programTitle: "PSOs",
                            tagHeading: "PSO",
                            descriptionHeading: "Description",
                            panelContents: [
                                {
                                    tag: "PSO 1",
                                    description: "Globally Competent engineers"
                                },
                                {
                                    tag: "PSO 2",
                                    description: "Able to sustain the quest for learning and pursue higher studies"
                                },
                                {
                                    tag: "PSO 3",
                                    description: "Able to solve the contemporary issues using the technology and by adopting the changes in the eco system"
                                },
                                {
                                    tag: "PSO 4",
                                    description: "Working professionals with social and ethical responsibilities"
                                }
                            ]
                        }}/>
                </div>
            </div>
        </div>
    );

}

function Card(props) {
    return (
        <div className="panel">
            <div className={styles.panelTitle}>
                <h1>{props.data.programTitle}</h1>
            </div>
            <div className={styles.contentHolder}>
                <div className={styles.contentHeading}>
                    <div className={styles.tagHeading}>
                        <h2>{props.data.tagHeading}</h2>
                    </div>
                    <div className={styles.descriptionHeading}>
                        <h2>{props.data.descriptionHeading}</h2>
                    </div>
                </div>
                <ul>
                    {
                        props.data.panelContents.map((obj) => {
                            return (<l1><PanelContents c={{
                                tag: obj.tag,
                                description: obj.description
                            }} />
                            </l1>)
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

function PanelContents(props) {
    return (
        <>
            <div className={styles.contentData}>
                <div className={styles.tag}> <p>{props.c.tag}</p></div>
                <div className={styles.description}><p>{props.c.description}</p></div>
            </div>
        </>
    );
}