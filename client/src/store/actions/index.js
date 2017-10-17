import axios from 'axios';

export function loadCourses(username = 'bob.cooper@gmail.com', password = '123456') {
  return function(dispatch) {
    dispatch({ type: 'COURSES_REQUEST' });
      return axios({
        method:'get',
        url:'http://localhost:4000/courses',
        auth: {
          username,
          password
        }
      })
      .then((response) => {
        dispatch({ type: 'COURSES_SUCCESS', payload: response});
        return response;
      })
      .catch((error) => {
        dispatch({ type: 'COURSES_FAILURE' });
        return error;
      });
  };
}

export function loadCategories(username = 'bob.cooper@gmail.com', password = '123456') {
  return function(dispatch) {
    dispatch({ type: 'CATEGORIES_REQUEST' });
      return axios({
        method:'get',
        url:'http://localhost:4000/categories',
        auth: {
          username,
          password
        }
      })
      .then((response) => {
        dispatch({ type: 'CATEGORIES_SUCCESS', payload: response});
        return response;
      })
      .catch((error) => {
        dispatch({ type: 'CATEGORIES_FAILURE' });
        return error;
      });
  };
}
