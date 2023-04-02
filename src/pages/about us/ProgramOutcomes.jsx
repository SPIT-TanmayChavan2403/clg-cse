import React from 'react';
import styles from  '../../styles/programoutcomes.module.css';

function ProgramOutcomes(props){

    const po_data = [
        "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
        "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences",
        "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet specified needs with appropriate consideration for public health and safety, and the cultural, societal, and environmental considerations.",
        "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
        "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.",
        "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
        "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
        "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
        "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
        "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
        "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
    ];

	return(
		<div className={styles.outerWrapper}>
        	<div className={styles.heading}>
                <span className={styles.title}> Program Outcomes </span>
            </div>
            <div className={styles.content}>
                <ol className={styles.ol}>
                    <li className={styles.liHeading}> <span className={styles.listContentHeading}> Description </span> </li>
                </ol>
                <ol className={styles.ol}>
                {
                    po_data.map((item) => (
                        <li className={styles.li}> <span className={styles.listContent}> {item} </span> </li>
                    ))
                }
                </ol>
            </div>
        </div>
	)
}

export default ProgramOutcomes;