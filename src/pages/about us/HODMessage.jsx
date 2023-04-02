import styles from '../../styles/about us/HODMessage.module.css'

export default function HODMessage(){
    return(
        <div id={styles.message}>
            <div id={styles.title}>
                Dr. Dhananjay Kalbande
            </div>
            <div id={styles.subtitle}>
                HOD of Computer Science Department
            </div>
            <div id={styles.img}>
                <img src="./about_us.jpg" alt="" />
            </div>
            <div id={styles.desc}>
                I have great pleasure in expressing my thoughts as the Principal of Sardar Patel Institute of Technology (SPIT), the Numero Uno, self-financed, autonomous Institution of Maharashtra. We are a constituent of Bharatiya Vidya Bhavan, not just a conglomeration of more than 300 institutions, but a culture, a saga, a holy journey, started by Dr. K.M. Munshi with the support of Mahatma Gandhi in 1938. Imparting value-based education with Indian cultural ethos has always been the motto of Bhavan.
                Engineers & technologists form the backbone of any nation's economic development. 
                We focus on “How to learn?” rather than “What to learn?”. We believe in multidisciplinary exposure to the learners, yet ensuring growth in one vertical, cherishing human sensitivity and empathy. We have thoughtfully articulated a unique academic model towards this. Our splendid academic performance, sparkling placements (quantitative and qualitative), enrollment for higher studies at the best places of the world, prizes won by our students in national/international level technical competitions, in past many years are the true testimonials for this.
                On behalf of all stakeholders of SPIT, I welcome you to this family and look forward to your valuable association with us for a better tomorrow.

                <p>
                    Let's grow together…
                </p>

            </div>
        </div>
    )
}