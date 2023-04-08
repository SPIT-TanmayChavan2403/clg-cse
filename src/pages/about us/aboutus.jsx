import styles from '../../styles/about us/aboutus.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { data } from '../../metadata/aboutDeptData';

const createCarouselItemImage = (imgFile, options = {}) => (
    <div key={imgFile}>
        <img src={`/assets/carousel/${imgFile}`} alt="" className={styles.sliderImages} />
    </div>
);

const baseChildren = <div>{data["about-us-carousal-images"].map(createCarouselItemImage)}</div>;

const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 3000,
    transitionTime: 800,
    swipeScrollTolerance: 5
});

export const base = () => <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>;

export default function AboutUs(){

    return(
        <div id={styles.aboutus}>
            <h2 className={styles.heading}> About The Department </h2>
            <div id={styles.wrapper}>
                <Carousel {...getConfigurableProps()}>
                    {baseChildren.props.children}
                </Carousel>
            </div>
            <div className={styles.aboutDept}>
            {
                data["about-the-department"].map((line, index) => (
                    <span key={index} className={styles.para}> {line} </span>
                ))
            }
            </div>
        </div>
    )
}