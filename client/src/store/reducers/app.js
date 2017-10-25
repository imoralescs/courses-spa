export function app(state, { type }) {
  state = state || {
    isFetching: false,
  };
  switch (type) {
    case 'SERVER_REQUEST': {
      const newState = Object.assign({},
        state,{
          isFetching: true,
        });
      return newState;
    }
    case 'SERVER_SUCCESS': {
      const newState = Object.assign({},
        state,{
          isFetching: false,
        });
      return newState;
    }
    default: {
      return state;
    }
  }
}
