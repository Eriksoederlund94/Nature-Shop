import { createContext, useReducer } from 'react';
import { AppAction, AppReducer } from './AppReducer';
import { productData } from '../data/productsData';
import { userData } from '../data/userData';

const initialState = {
  isLoggedIn: false,
  initialProducts: productData,
  initialUser: userData,
};

interface AppContextProps {
  state: typeof initialState;
  dispatch: (action: AppAction) => void;
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
