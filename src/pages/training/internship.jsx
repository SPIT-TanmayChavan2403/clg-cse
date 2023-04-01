import React from 'react';
import styles from  '../../styles/internship.module.css';

function Internships(props){
	return(
		<div className="outer-wrapper">
        	<div className="container">
        		<table id={styles.table}>
        			<tr className={styles.row}>
        				<th className={styles.data}> <Block title="Sr.No" bg="#D9D9D9" /> </th>
        				<th className={styles.data}> <Block title="Academic Year" bg="#EEEEEE" /> </th>
        				<th className={styles.data}> <Block title="TPO" bg="#D9D9D9" /> </th>
        				<th className={styles.data}> <Block title="Non - TPO" bg="#EEEEEE" /> </th>
        				<th className={styles.data}> <Block title="Total" bg="#D9D9D9" /> </th>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="1" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2020-2021" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="49" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="44" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="93" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="2" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2019-2020" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="56" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="44" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="100" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="3" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2018-2019" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="8" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="12" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="20" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="4" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2017-2018" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="13" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="14" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="27" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="5" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2016-2017" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="12" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="16" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="28" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="6" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2015-2016" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="12" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="8" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="20" bg="#D9D9D9" /> </td>
        			</tr>
        			<tr className={styles.row}>
        				<td className={styles.data}> <Block title="7" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="2014-2015" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="11" bg="#D9D9D9" /> </td>
        				<td className={styles.data}> <Block title="0" bg="#EEEEEE" /> </td>
        				<td className={styles.data}> <Block title="11" bg="#D9D9D9" /> </td>
        			</tr>
        		</table>
        	</div>
        </div>
	)
}

function Block(props){
	return(
		<div className={styles.block} style={{backgroundColor: props.bg}}>
			<h2> {props.title} </h2>
		</div>
	)
}

export default Internships;