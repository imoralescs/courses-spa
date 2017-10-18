import { combineReducers } from 'redux';

const initialState = {
  courses: [],
  categories: [],
  isFetching: false,
  isAuthenticated: localStorage.getItem('course_dashboard_token') ? true : false
};

function app(state = initialState, { type, payload = null}) {
  switch (type) {
    case 'COURSES_SUCCESS': {
      const newState = Object.assign({},
        state,{
          courses: payload.data,
        });
      return newState;
    }
    case 'CATEGORIES_SUCCESS': {
      const newState = Object.assign({},
        state,{
          categories: payload.data,
        });
      return newState;
    }
    case 'LOGIN_SUCCESS': {
      const newState = Object.assign({},
        state,{
          isFetching: false,
          isAuthenticated: true,
          errorMessage: ''
        });
      return newState;
    }
    case 'TOKEN_EXPIRED': {
      const newState = Object.assign({},
        state,{
          isAuthenticated: false
        });
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({ app });
