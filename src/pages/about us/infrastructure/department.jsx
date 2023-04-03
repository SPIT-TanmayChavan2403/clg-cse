import styles from '../../../styles/about us/department.module.css'

function Department(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src="department/cn.png" height="250" alt='department' width= "300" /> 
                        <div className={styles.cn}>Computer Networks</div>
                    </div>
                    
                    <div className={styles.image}>
                        <img src="department/os.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Operating System</div>
                    </div>
                    <div className={styles.image}>
                        <img src="department/pl.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Programming Lab-1</div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src="department/dbms.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>DBMS</div>
                    </div>
                    <div className={styles.image}>
                        <img src="department/projl.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Project Lab</div>
                    </div>
                    <div className={styles.image}>
                        <img src="department/rnd.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Research & Development</div>
                    </div>
                </div> 

                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src="department/se.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Software Engineering</div>
                    </div>
                    <div className={styles.image}>
                    <img src="department/pll.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Programming Lab-2</div>
                    </div>
                    <div className={styles.image}>
                    <img src="department/projll.png" alt='' height="250" width= "300" /> 
                        <div className={styles.cn}>Project Lab-2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department;