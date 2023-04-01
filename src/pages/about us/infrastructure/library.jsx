import styles from '../../../styles/about us/Infrastructure.module.css'

export default function Library(){
    return(
        <>
            <div id={styles.objective_main}>
                <div id={styles.outter_content}>
                The department library strives to connects outstanding faculty and brilliant students to the knowledge and state of-the-art of their disciplines, and strengthens the aspirations of teaching work thereby supporting the institute’s march towards its vision.
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <i className="fa-solid fa-chalkboard-user"></i>
                        <p>Facilities for Teachers</p>
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            Faculty can issue two books at a time for a period of one month. No penalty/fine for returning late.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            At the end of the academic year every one has to return all the books for stock verification.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            Faculty's no dues form is not signed by HOD unless he/she returns the departmental library books. This is verified with library In-charge.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            One has to give copy of book if misplaced by him/her.
                            </span>
                        </div> 
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <i className="fa-solid fa-user-graduate"></i>
                        <p>Facilities for Students</p>
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            Students can issue only one book at a time for a period of two weeks. No penalty/fine for returning late. But if request comes for same book after two weeks, then he/she is forced to return the book.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            At the end of the academic year everyone has to return all the books for stock verification.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            Student's no dues form is not signed by HOD unless he/she returns the departmental library books. This is verified with library incharge.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                            One has to give copy of book if misplaced by him/her.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}