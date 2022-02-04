interface AppState {
  isLoggedIn: boolean;
  initialProducts: [];
  initialUser: any;
}

export type AppAction =
  | { type: 'SET_LOGGED_IN' }
  | { type: 'SET_INITIAL_PRODUCTS'; payload: any }
  | { type: 'SET_INITIAL_USER'; payload: any };

export function AppReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case 'SET_INITIAL_PRODUCTS':
      return {
        ...state,
        initialProducts: action.payload.initialProducts,
      };
    case 'SET_INITIAL_USER':
      return {
        ...state,
        initialUser: action.payload.initialUser,
      };
    default:
      return state;
  }
}
