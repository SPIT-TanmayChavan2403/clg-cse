import React from 'react';
import styles from '../../styles/about us/courseOutline.module.css'

function CourseOutline(props){
	return(
		<div className="outer-wrapper">
        	<div className="container">
        		<p id={styles.text}>
        			The course outline strives to connects outstanding faculty and brilliant students to the nits and grits  of the course and how the course will be completed in the due course of time and in doing so supporting the institute’s march towards its vision.
        		</p>
				<table id={styles.table}>
        			<tr className={styles.row}>
        				<th className={styles.heading}> <Block title="2021 - 2022" bg="#D9D9D9"/> </th>
        				<th className={styles.heading}> <Block title="TE" bg="#EEEEEE" cls='longtxt' /> </th>
        				<th className={styles.heading}> <Block title="SE" bg="#D9D9D9" /> </th>
        				<th className={styles.heading}> <Block title="FE" bg="#EEEEEE" cls='longtxt' /> </th>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="2020 - 2021" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="TE" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="SE" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="FE" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="2019 - 2020" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="TE" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="SE" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="FE" bg="#EEEEEE" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="2018 - 2019" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="TE" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="SE" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="FE" bg="#D9D9D9" /> </td>
        			</tr>
        		</table>
        	</div>
        </div>
	)
}


function Block(props){
	return(
		<div className={`${styles.block} ${props.cls}`} style={{backgroundColor: props.bg}}>
			<h2 className={styles.blockText}> {props.title} </h2>
		</div>
	)
}


export default CourseOutline;