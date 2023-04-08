import React from 'react';
import styles from '../styles/PageNotFound.module.css';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <img src='/assets/misc/404-icon.png' alt="" className={styles.icon} />
            <h2 className={styles.title}> 404 Not Found </h2>
            <p className={styles.message}> Something went wrong! The page you were trying to view does not exist. </p>
            <Link to='/' className={styles.button}> Back to home </Link>
        </div>
    )
}