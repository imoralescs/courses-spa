import axios from 'axios';
import * as path from '../../dev.url.js';

export function loadCourses(username = 'bob.cooper@gmail.com', password = '123456') {
  return function(dispatch) {
    dispatch({ type: 'COURSES_REQUEST' });
      return axios({
        method:'get',
        url:`${path.API_URL_2}courses`,
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
        url:`${path.API_URL_2}categories`,
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
/*
function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  };
}
*/
export function loginUser(creds) {
  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    return axios({
      method:'get',
      url:`${path.TOKEN_URL_2}`,
      auth: {
        username : creds.username,
        password : creds.password
      }
    })
    .then((response) => {
      if(!response.ok) {

        //dispatch(loginError(user.message));
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
