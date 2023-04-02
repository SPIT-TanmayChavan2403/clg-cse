import React from 'react';
import styles from '../../styles/facultyAwards.module.css'

function FacultyAwards(props){
	return(
		<div className="outer-wrapper">
            <div className="container">
				<Section 
					position="left" img="./awards/award1.png"
					heading = "Ms. Renuka Pawar"
					text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat magnam dolor sit laboriosam officiis, ullam sint perspiciatis. Deserunt adipisci labore laborum error quam, sint mollitia ad officia nostrum magni culpa iste aperiam exercitationem dolor dolores ea iusto libero ipsum qui sit harum. Hic voluptate cumque at numquam id veritatis et."
				/>
				<Section 
					position="right" img="./awards/award2.png"
					heading = "Mr. Jignesth Sisodia"
					text = "'Received Best Teacher Award' for the year 2015-16 from Cognizant."
				/>
				<Section 
					position="left" img="./awards/award3.png"
					heading = "Ms. Renuka Pawar"
					text = "'Received Best Upcoming teacher Award' for the year 2018-19."
				/>
			</div>
		</div>
	)
}

function Section(props){
	return(
		<div className={styles.section}>
			{
				props.position === "left" 
				?
					<>
						<ImageBlock img={props.img} />
						<TextBlock data={{heading: props.heading, text: props.text}} />
					</>
				:
					<>
						<TextBlock data={{heading: props.heading, text: props.text}} />
						<ImageBlock img={props.img} />
					</>
			}
		</div>
	)
}


function ImageBlock(props){
	return(
		<div className={styles.imageOuterContainer}>
			<div className={styles.imageInnerContainer}>
				<img src={props.img} alt="" className={styles.image} />
			</div>
		</div>
	)
}

function TextBlock(props){
	return(
		<div className={styles.textBlockContainer}>
			<div className={styles.textBlockInnerContainer}>
				<div className={styles.heading}>
					<h1>{props.data.heading}</h1>
				</div>
				<div className={styles.text}>
					<p>{props.data.text}</p>
				</div>
			</div>
		</div>
	)
}

export default FacultyAwards;