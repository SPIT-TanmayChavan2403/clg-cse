import React from 'react';
import styles from '../../styles/publications.module.css'

function Publications(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <div id={styles.title}>
                    <h1 className={styles.year}>2020 - 2021</h1>
                </div>
                <Card data={{
                    number: '1.',
                    title: " System and Method for Semantic Based Search Engine",
                    nameofInventor: "Dungarwal, Nilesh; Shah, Nisarg; Jhunjhunwala, Rishabh; Radha Shankarmani",
                    applicationNo: " 1410/MUM/2013",
                    dof: "15/04/2013",
                    dop: "12/06/2015",
                    status: "Published",
                    position: {left: "0%"}
                }} />
                <Card data={{
                    number: '2.',
                    title: " System and Method for Semantic Based Search Engine",
                    nameofInventor: "Dungarwal, Nilesh; Shah, Nisarg; Jhunjhunwala, Rishabh; Radha Shankarmani",
                    applicationNo: " 1410/MUM/2013",
                    dof: "15/04/2013",
                    dop: "12/06/2015",
                    status: "Published",
                    position: {right: "0%"}
                }} />
                <Card data={{
                    number: '3.',
                    title: " System and Method for Semantic Based Search Engine",
                    nameofInventor: "Dungarwal, Nilesh; Shah, Nisarg; Jhunjhunwala, Rishabh; Radha Shankarmani",
                    applicationNo: " 1410/MUM/2013",
                    dof: "15/04/2013",
                    dop: "12/06/2015",
                    status: "Published",
                    position: {left: "0%"}
                }} />
                <Card data={{
                    number: '4.',
                    title: " System and Method for Semantic Based Search Engine",
                    nameofInventor: "Dungarwal, Nilesh; Shah, Nisarg; Jhunjhunwala, Rishabh; Radha Shankarmani",
                    applicationNo: " 1410/MUM/2013",
                    dof: "15/04/2013",
                    dop: "12/06/2015",
                    status: "Published",
                    position: {right: "0%"}
                }} />
                <Card data={{
                    number: '5.',
                    title: " System and Method for Semantic Based Search Engine",
                    nameofInventor: "Dungarwal, Nilesh; Shah, Nisarg; Jhunjhunwala, Rishabh; Radha Shankarmani",
                    applicationNo: " 1410/MUM/2013",
                    dof: "15/04/2013",
                    dop: "12/06/2015",
                    status: "Published",
                    position: {left: "0%"}
                }} />
            </div>
        </div>
    )
}

function Card(props){
    return(
        <div className={styles.card}>
            <div className={styles.cardOverlay}>
                <div className={styles.cardOverlayLeftsection}>
                    <div className={styles.cardOverlayHeading}>
                        <h1 className={styles.COHheading}>{props.data.number}</h1>
                    </div>
                </div>    
                <div className={styles.cardOverlayRightsection}>
                    <div className={styles.cardOverlayHeading}>
                        <h3 >{props.data.title}</h3>
                        <h3> {props.data.nameofInventor}</h3>
                    </div>
                    <div className={styles.cardOverlayContent}>
                        <ul className={styles.COCul}>
                            <li className={styles.COCli}>
                                <p>{props.data.applicationNo}</p>
                            </li>
                            <li className={styles.COCli}>
                                <p>{props.data.dof}</p>
                            </li>
                            <li className={styles.COCli}>
                                <p>{props.data.dop}</p>
                            </li>
                            <li className={styles.COCli}>
                                <p>{props.data.status}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.cardSquarebg} style={props.data.position} />   
        </div>
    )
}

export default Publications;