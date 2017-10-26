import React from 'react';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import styles from './courses.css';

export default function Courses(props) {
	if(props.state.app.isFetching) {
		return(
			<Loading />
		);
	}
	return (
    <div className={styles.container}>
      <ul className={styles.list}>
      {props.state.courses.map((course) => {
        return(
          <li className={styles.item} key={course.id}>
            <Link to={'/admin/course/' + course.id}>
              <div className={styles.itemThumbnail}>
                <img className={styles.itemThumbnailImg} src={course.thumbnail_url + (Math.random() * (900 - 100) + 100)}/>
              </div>
              <div className={styles.itemDetails}>
                <h2 className={styles.itemTitle}>{course.title}</h2>
                <span>by - </span>
                <span className={styles.itemInstructor}>{course.instructor} | {course.published_date}</span>
              </div>
            </Link>
          </li>
        );
      })}
      </ul>
    </div>
	);
}
