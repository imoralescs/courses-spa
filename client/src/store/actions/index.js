import axios from 'axios';
import * as path from '../../dev.url.js';

// Example or intercept request or response before .then and .catch
axios.interceptors.response.use(function (response) {
  return response;
},
function (error) {
  if (error.response && 401 === error.response.status) {
    //console.log('401');
    return Promise.reject(error);
  }
  else {
    return Promise.reject(error);
  }
});

function receiveLogin() {
  return {
    type: 'LOGIN_SUCCESS'
  };
}

export function loginUser(creds) {
  return (dispatch) => {
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
        return false;
      }
      else {
        localStorage.setItem('jwt', response.data.token);

        // Dispatch the success action
        dispatch(receiveLogin(response.data.token));
      }
    })
    .catch((error) => {
      return error;
    });
  };
}

function tokenExpire() {
  return {
    type: 'TOKEN_EXPIRED',
    isAuthenticated: false,
  };
}

export function loadCourses() {
  const token = localStorage.getItem('jwt');
  const config = {
    headers: {'Authorization': `Bearer ${token}`}
  };

  return function(dispatch) {
    dispatch({ type: 'SERVER_REQUEST' });
    return axios.get(`${path.API_URL_1}courses`, config)
      .then((response) => {
        dispatch({ type: 'COURSES_SUCCESS', payload: response});
        return response;
      })
      .then((response) => {
        dispatch({ type: 'SERVER_SUCCESS'});
        return response;
      })
      .catch((error) => {
        if(error.response.status === 401)
        {
          dispatch(tokenExpire());
        }
        return error;
      });
  };
}

export function loadCourse(id) {
  const token = localStorage.getItem('jwt');
  const config = {
    headers: {'Authorization': `Bearer ${token}`}
  };

  return function(dispatch) {
    dispatch({ type: 'SERVER_REQUEST' });
    return axios.get(`${path.API_URL_1}courses/${id}`, config)
      .then((response) => {
        dispatch({ type: 'COURSE_SUCCESS', payload: response});
        return response;
      })
      .then((response) => {
        dispatch({ type: 'SERVER_SUCCESS'});
        return response;
      })
      .catch((error) => {
        if(error.response.status === 401)
        {
          dispatch(tokenExpire());
        }
        return error;
      });
  };
}

export function loadCategories() {
  const token = localStorage.getItem('jwt');
  const config = {
    headers: {'Authorization': `Bearer ${token}`}
  };

  return function(dispatch) {
    dispatch({ type: 'SERVER_REQUEST' });
    return axios.get(`${path.API_URL_1}categories`, config)
      .then((response) => {
        dispatch({ type: 'CATEGORIES_SUCCESS', payload: response});
        return response;
      })
      .then((response) => {
        dispatch({ type: 'SERVER_SUCCESS'});
        return response;
      })
      .catch((error) => {
        if(error.response.status === 401)
        {
          dispatch(tokenExpire());
        }
        return error;
      });
  };
}
