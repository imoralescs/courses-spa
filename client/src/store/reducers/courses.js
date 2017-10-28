export function courses(state, { type, payload = null}) {
  state = state || [];
  switch (type) {
    case 'COURSES_SUCCESS': {
      const newState = state.concat(payload.data);
      return newState;
    }
    default: {
      return state;
    }
  }
}
