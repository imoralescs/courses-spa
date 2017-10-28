import React from 'react';
import styles from './loading.css';

export default function Loading() {
	return (
		<div className={styles.container}>
			<div className={`${styles.dot} ${styles.dot1}`}></div>
			<div className={`${styles.dot} ${styles.dot2}`}></div>
			<div className={`${styles.dot} ${styles.dot3}`}></div>
		</div>
	);
}
