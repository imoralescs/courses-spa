import React from 'react';
import styles from './lesson.css';

export default function Lesson(props) {
	return (
		<li key={props.i} className={styles.item}>
			<span className={styles.number}>Lesson {props.i}:</span>
			<p className={styles.title}>Lesson Title</p>
			<span className={styles.duration}>Duration</span>
		</li>
	);
}