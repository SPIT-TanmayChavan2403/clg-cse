import React from 'react';
import styles from '../../styles/about us/courseOutline.module.css'

function CourseOutline(props){
	return(
		<div className="outer-wrapper">
        	<div className="container">
        		<p>
        			The course outline strives to connects outstanding faculty and brilliant students to the nits and grits  of the course and how the course will be completed in the due course of time and in doing so supporting the institute’s march towards its vision.
        		</p>
				<table id={styles.table}>
        			<tr className={styles.row}>
        				<th className={styles.heading}> <Block title="Sr.No" bg="#D9D9D9"/> </th>
        				<th className={styles.heading}> <Block title="Academic Year" bg="#EEEEEE" cls='longtxt' /> </th>
        				<th className={styles.heading}> <Block title="TPO" bg="#D9D9D9" /> </th>
        				<th className={styles.heading}> <Block title="Non - TPO" bg="#EEEEEE" cls='longtxt' /> </th>
        				<th className={styles.heading}> <Block title="Total" bg="#D9D9D9" /> </th>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="1" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="2020 - 2021" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="49" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="44" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="93" bg="#EEEEEE" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="2" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2019 - 2020" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="56" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="44" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="100" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="3" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="2018 - 2019" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="8" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="12" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="20" bg="#EEEEEE" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="4" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2017 - 2018" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="13" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="14" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="27" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="5" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="2016 - 2017" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="12" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="16" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="28" bg="#EEEEEE" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="6" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2015 - 2016" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="12" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="8" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="20" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="7" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="2014 - 2015" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="11" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="0" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="11" bg="#EEEEEE" /> </td>
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