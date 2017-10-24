import React from 'react';
import Lesson from '../../components/Lesson';
import Loading from '../../components/Loading';
import styles from './course.css';

export default function Course(props) {
	const lessons = [];
	for(let i = 0; i < props.state.app.course.num_lessons; i++) {
		lessons.push(
			<Lesson i={i} />
		);
	}

	if(props.state.app.course.length < 1) {
		return(
			<Loading />
		);
	}
	return (
		<div className={styles.container}>
      <h1 className={styles.detailsTitle}>{props.state.app.course.title}</h1>
      <div className={styles.detailsThumbnail}>
        <img className={styles.detailsImg} src={props.state.app.course.thumbnail_url}/>
      </div>
      <div className={styles.detailsAbout}>
        <h2 className={styles.detailsAboutTitle}>About Course</h2>
        <div className={styles.detailsAbountContent} dangerouslySetInnerHTML={{__html: props.state.app.course.content}}></div>
      </div>
      <ul className={styles.list}>
				{lessons}
      </ul>
    </div>
	);
}
