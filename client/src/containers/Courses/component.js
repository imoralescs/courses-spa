import React from 'react';
import Loading from '../../components/Loading';
import {  Link } from 'react-router-dom';

export default function Courses(props) {
	if(props.state.app.isFetching) {
		return(
			<Loading />
		);
	}
	return (
    <div className="courses">
      <ul className="courses__list">
      {props.state.courses.map((course) => {
        return(
          <li className="courses__item" key={course.id}>
            <Link to={'/admin/course/' + course.id}>
              <div className="courses__item-thumbnail">
                <img className="courses__item-thumbnail-img" src={course.thumbnail_url + (Math.random() * (900 - 100) + 100)}/>
              </div>
              <div className="courses__item-details">
                <h2 className="courses__item-title">{course.title}</h2>
                <span>by - </span>
                <span className="courses__item-instructor">{course.instructor} | {course.published_date}</span>
              </div>
            </Link>
          </li>
        );
      })}
      </ul>
    </div>
	);
}
