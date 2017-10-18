import axios from 'axios';
import * as path from '../../dev.url.js';

function requestLogin(creds) {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(token) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    token: token
  };
}

function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function tokenExpire() {
  return {
    type: 'TOKEN_EXPIRED',
    isAuthenticated: false
  };
}

export function loginUser(creds) {
  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    return axios({
      method:'get',
      url:`${path.TOKEN_URL_1}`,
      auth: {
        username : creds.username,
        password : creds.password
      }
    })
    .then((response) => {
      if(!response.status == 201) {
        dispatch(loginError(response));
      }
      else {
        localStorage.setItem('course_dashboard_token', response.data.token);

        // Dispatch the success action
        dispatch(receiveLogin(response.data.token));
      }
    })
    .catch((error) => console.log('Error: ', error));
  };
}

export function loadCourses() {
  const token = localStorage.getItem('course_dashboard_token');
  const config = {
    headers: {'Authorization': `Beare ${token}`}
  };

  return function(dispatch) {
    dispatch({ type: 'COURSES_REQUEST' });
    return axios.get(`${path.API_URL_1}courses`, config)
      .then((response) => {
        dispatch({ type: 'COURSES_SUCCESS', payload: response});
        return response;
      })
      .catch((error) => {
        //console.dir(error.response);
        localStorage.removeItem('course_dashboard_token');
        tokenExpire();
        //dispatch({ type: 'COURSES_FAILURE' });
        return error;
      });
  };
}

export function loadCategories() {
  const token = localStorage.getItem('course_dashboard_token');
  const config = {
    headers: {'Authorization': `Bearer ${token}`}
  };

  return function(dispatch) {
    dispatch({ type: 'CATEGORIES_REQUEST' });
    return axios.get(`${path.API_URL_1}categories`, config)
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
