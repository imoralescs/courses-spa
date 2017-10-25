export function categories(state, { type, payload = null}) {
  state = state || [];
  switch (type) {
    case 'CATEGORIES_SUCCESS': {
      const newState = state.concat(payload.data);
      return newState;
    }
    default: {
      return state;
    }
  }
}
