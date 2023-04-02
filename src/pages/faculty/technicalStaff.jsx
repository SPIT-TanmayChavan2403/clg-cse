import React from 'react';
import styles from "../../styles/techicalStaff.module.css"

function TechnicalStaff(props){
    return(
        <div className="outer-wrapper">
            <div className="container">
                <Block img="/technical/img1.png" name="Smt. Neha Rajurikar"
                    qualification="M.E.(Electronics), B.E.(Electrical), Diploma in Computer"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis veritatis error facilis numquam? Necessitatibus quasi recusandae quis commodi neque laudantium earum doloremque labore atque reiciendis ad culpa ipsum totam corrupti est sapiente molestiae, mollitia dolore laboriosam cupiditate omnis similique repellat. Voluptate quam veniam aliquam. Delectus doloribus pariatur nisi quia earum sit ad sint vero dolor ut possimus quibusdam maiores, ratione excepturi, veritatis alias! Esse maiores voluptatibus eius, error quibusdam incidunt consequatur sint corporis eaque quaerat, aliquam mollitia eos consectetur amet recusandae enim, saepe officiis explicabo laudantium culpa ipsum fuga similique? Iste accusamus laudantium suscipit itaque recusandae ab exercitationem, sapiente neque!"
                />
                <Block img="/technical/img1.png" name="Shri. Venkat Islur"
                    qualification="B.Sc, Diploma in Computer (Field Engineering)"
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis veritatis error facilis numquam? Necessitatibus quasi recusandae quis commodi neque laudantium earum doloremque labore atque reiciendis ad culpa ipsum totam corrupti est sapiente molestiae, mollitia dolore laboriosam cupiditate omnis similique repellat. Voluptate quam veniam aliquam. Delectus doloribus pariatur nisi quia earum sit ad sint vero dolor ut possimus quibusdam maiores, ratione excepturi, veritatis alias! Esse maiores voluptatibus eius, error quibusdam incidunt consequatur sint corporis eaque quaerat, aliquam mollitia eos consectetur amet recusandae enim, saepe officiis explicabo laudantium culpa ipsum fuga similique? Iste accusamus laudantium suscipit itaque recusandae ab exercitationem, sapiente neque!"
                />
            </div>
        </div>
    )
}

function Block(props){
    return(
        <div className={styles.section}>
            <div className={styles.imageContainer}>
                <img src={props.img} alt="Staff" className={styles.image} />
            </div>
            <div className={styles.textInnerContainer}>
                <div className={styles.textInnerContainer}>
                    <div className={styles.name}>
                        <h2> {props.name} </h2>
                    </div>
                    <div className={styles.qualifications}>
                        <h2> {props.qualification} </h2>
                    </div>
                    <div className={styles.text}>
                        {props.text}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalStaff;