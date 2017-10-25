export function course(state, { type, payload = null}) {
  state = state || {};
  switch (type) {
    case 'COURSE_SUCCESS': {
      const newState = Object.assign({}, state, payload.data);
      return newState;
    }
    default: {
      return state;
    }
  }
}
