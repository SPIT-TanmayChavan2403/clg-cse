import styles from '../../styles/about us/aboutus.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function AboutUs(){

    return(
        <div id="aboutus">
            <div id={styles.wrapper}>
                <Carousel className={styles.mainSlide}>
                    <div width="300px">
                        <img src="./banner/projects.png" alt=""/>
                    </div>
                    <div>
                        <img src="./banner/hero.png" alt=""/>  
                    </div>
                    <div>
                    <img src="./banner/library.png" alt=""/>
                    </div>
                </Carousel>
            </div>
            
        </div>
    )
}