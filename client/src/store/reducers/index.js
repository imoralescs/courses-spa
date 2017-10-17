import { combineReducers } from 'redux';

const initialState = {
  courses: [],
  categories: [],
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
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
    default: {
      return state;
    }
  }
}

export default combineReducers({ app });
