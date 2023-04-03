import styles from '../../styles/about us/Objectives.module.css'

export default function Objectives(){
    return(
            <div id={styles.objective_main}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <i className="fa-solid fa-eye"></i>
                        <p>Vision</p>
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                To produce globally competent, social and ethical practicing graduates adapting technological changes to solve contemporary issues.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                To build strong teaching and research environment to provide quality education in Computer Engineering.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                To produce globally competent, social and ethical practicing graduates adapting technological changes to solve contemporary issues.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <i className="fa-solid fa-thumbs-up"></i>
                        <p>Mission</p>
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                Collaborate with global professional bodies for recognition Work with local NGOs to do social service.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                Design curriculum to inculcate ethical practices in technological and behavioral aspects.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                Industry collaboration to keep abreast of technology.
                            </span>
                        </div>
                        <div className={styles.list_item}>
                            <i className="fa-solid fa-circle"></i>
                            <span>
                                Engage with stakeholders to understand contemporary issues and propose technical solutions.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}