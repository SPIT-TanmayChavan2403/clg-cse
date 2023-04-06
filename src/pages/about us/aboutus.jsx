import styles from '../../styles/about us/aboutus.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const createCarouselItemImage = (index, options = {}) => (
    <div key={index}>
        <img src={`/Carousel/${index}.jpeg`} />
    </div>
);

const baseChildren = <div>{["Carousel1", "Carousel2", "Carousel3", "Carousel4", "Carousel5", "Carousel6", "Carousel7"].map(createCarouselItemImage)}</div>;

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
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5
});

export const base = () => <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>;

export default function AboutUs(){

    return(
        <div id={styles.aboutus}>
            <h2 className={styles.aboutDept}> About The Department </h2>
            <div id={styles.wrapper}>
                <Carousel {...getConfigurableProps()}>
                    {baseChildren.props.children}
                </Carousel>
            </div>
            
        </div>
    )
}