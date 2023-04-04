import styles from '../../styles/about us/aboutus.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function AboutUs(){

    return(
        <div id={styles.aboutus}>
            <h2 className={styles.aboutDept}> About The Department </h2>
            <div id={styles.wrapper}>
                <Carousel className={styles.mainSlide} autoPlay={true}>
                    <div>
                        <img src="./Carousel/Carousel1.png" className={styles.images} alt="" />
                    </div>
                    <div>
                        <img src="./Carousel/Carousel2.png" className={styles.images} alt=""/>  
                    </div>
                    <div>
                        <img src="./Carousel/Carousel4.png" className={styles.images} alt=""/>
                    </div>
                    <div>
                        <img src="./Carousel/Carousel6.png" className={styles.images} alt=""/>
                    </div>
                </Carousel>
            </div>
            
        </div>
    )
}