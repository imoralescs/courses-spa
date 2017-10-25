import React from 'react';
import Lesson from '../../components/Lesson';
import Loading from '../../components/Loading';
import styles from './course.css';

export default function Course(props) {
	const lessons = [];
	for(let i = 0; i < props.state.course.num_lessons; i++) {
		lessons.push(
			<Lesson key={i} i={i} />
		);
	}
	if(props.state.app.isFetching) {
		return(
			<Loading />
		);
	}
	return (
		<div className={styles.container}>
			<h1 className={styles.detailsTitle}>{props.state.course.title}</h1>
			<div className={styles.detailsThumbnail}>
				<img className={styles.detailsImg} src={props.state.course.thumbnail_url}/>
			</div>
			<div className={styles.detailsAbout}>
				<h2 className={styles.detailsAboutTitle}>About Course</h2>
				<div className={styles.detailsAbountContent} dangerouslySetInnerHTML={{__html: props.state.course.content}}></div>
			</div>
			<ul className={styles.list}>
				{lessons}
			</ul>
		</div>
	);
}
