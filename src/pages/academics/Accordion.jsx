import React from 'react';
import { useState } from 'react';
import styles from '../../styles/academics/accordion.module.css';

export const Accordion = ({selected, setSelected}) => {
    return (
      	<div className={styles.wrapper}>
        	<ul className={styles.accordionList}>
            	<li className={styles.accordionList__item}>
                	<AccordionItem selected={selected} setSelected={setSelected} />
              	</li>
        	</ul>
      	</div>
    )
}

const AccordionItem = ({selected, setSelected}) => {
  	const [opened, setOpened] = useState(true);
	// const [option, setOption] = useState('time-table');

	const handleClick = (clickedOption) => {
		setSelected(clickedOption);
	}

    return (
      	<div className={(opened ? `${styles.accordionItem__opened}` : '')}>
        	<div className={styles.accordionItem__line} onClick={() => { setOpened(!opened) }}>
          		<h3 className={styles.accordionItem__title}>
           			Table of contents
          		</h3>
          		<span className={styles.accordionItem__icon} />
        	</div>
			<div className={styles.accordionItem__inner}>
				<div className={styles.accordionItem__content}>
					<div className={styles.accordionItem__paragraph}>
						<ol className={styles.list}>
							<li onClick={() => handleClick('time-table')} className={(selected === 'time-table' ? `${styles.selectedOption}` : '')}> Time Table </li>
							<li onClick={() => handleClick('syllabus')} className={(selected === 'syllabus' ? `${styles.selectedOption}` : '')}> Syllabus </li>
							<li onClick={() => handleClick('results')} className={(selected === 'results' ? `${styles.selectedOption}` : '')}> Results </li>
							<li><a href="https://www.spit.ac.in/wp-content/uploads/2022/03/Placement-Stats_2021-2022_Final-Website21.pdf" target='_blank' rel="noreferrer"> Internships </a> </li>
							<li><a href="https://www.spit.ac.in/wp-content/uploads/2022/03/Placement-Stats_2021-2022_Final-Website21.pdf" target='_blank' rel="noreferrer"> Placements </a> </li>
							<li onClick={() => handleClick('projects')} className={(selected === 'projects' ? `${styles.selectedOption}` : '')}> Projects </li>
						</ol>
					</div>
            	</div>
          	</div>
      	</div>
    )
}
