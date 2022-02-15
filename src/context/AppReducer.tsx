import { ProductItem } from '../interfaces/productsData.interface';
import { UserItems } from '../interfaces/usersData.interface';
import { CartItem } from '../interfaces/cartData.interface';

interface AppState {
  isLoggedIn: boolean;
  currentUser: string;
  initialProducts: ProductItem[];
  initialUser: UserItems[];
  cart: CartItem[];
}

export type AppAction =
  | { type: 'SET_LOGGED_IN' }
  | { type: 'SET_CURRENT_USER'; payload: string }
  | { type: 'SET_INITIAL_PRODUCTS'; payload: ProductItem[] }
  | { type: 'SET_INITIAL_USER'; payload: UserItems[] }
  | { type: 'SET_CART'; payload: CartItem }
  | { type: 'SET_CART_AMOUNT'; payload: CartItem[] };

export function AppReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case 'SET_INITIAL_PRODUCTS':
      return {
        ...state,
        initialProducts: action.payload,
      };

    case 'SET_INITIAL_USER':
      return {
        ...state,
        initialUser: action.payload,
      };
    case 'SET_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'SET_CART_AMOUNT':
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
