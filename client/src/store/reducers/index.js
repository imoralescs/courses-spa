import { combineReducers } from 'redux';

const initialState = {};

function app(state = initialState, { type, /*payload = null*/ }) {
  switch (type) {
    default: {
      return state;
    }
  }
}

export default combineReducers({ app });