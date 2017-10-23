import React from 'react';

export default function Course(props) {
	const lessons = [];
	for(let i = 0; i < props.state.app.course.num_lessons; i++) {
		lessons.push(
			<li key={i} className="course__item">
				<span className="course__number">Lesson {i}:</span>
				<p className="course__title">Lesson Title{}</p>
				<span className="course__duration">Duration</span>
			</li>
		);
	}

	if(props.state.app.course.length < 1) {
		return(
			<p>Loading</p>
		);
	}
	return (
		<div className="course">
      <h1 className="course__details-title">{props.state.app.course.title}</h1>
      <div className="course__details-thumbnail">
        <img className="course__details-img" src={props.state.app.course.thumbnail_url}/>
      </div>
      <div className="course__details-about">
        <h2>About Course</h2>
        <div className="course__details-content" dangerouslySetInnerHTML={{__html: props.state.app.course.content}}></div>
      </div>
      <ul className="course__list">
				{lessons}
      </ul>
    </div>
	);
}
