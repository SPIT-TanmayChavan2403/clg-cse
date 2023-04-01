import React from "react";
import styles from  '../../styles/projects.css';

export function Projects(props) {
    return (
        <div className="outer-wrapper">
            <div className="container">
                <div id={styles.text}>
                    <p>Projects</p>
                </div>
                <div className="contents">
                    <p><a href="#"> BE IT Project students list Cat 1 2021 2022</a></p>
                    <p><a href="#"> BE IT Project students list Cat 2 2021 2022</a></p>

                    <p><a href="#"> BE IT Project students list Cat 1 2020 2021</a></p>
                    <p><a href="#"> BE IT Project students list Cat 2 2020 2021</a></p>
                    
                    <p><a href="#"> BE IT Project students list Cat 1 2019 2020</a></p>
                    <p><a href="#"> BE IT Project students list Cat 2 2019 2020</a></p>

                </div>
            </div>
        </div>
    );
}