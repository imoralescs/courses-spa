export function login(state, { type }) {
  state = state || {
    isAuthenticated: localStorage.getItem('jwt') ? true : false,
  };
  switch (type) {
    case 'LOGIN_SUCCESS': {
      const newState = Object.assign({},
        state,{
          isAuthenticated: true,
        });
      return newState;
    }
    case 'TOKEN_EXPIRED': {
      localStorage.removeItem('jwt');
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
