import { createContext, useState } from 'react';
import localStorageService from '../services/localStorageService';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // const [state,dispatch] = useReducer(reducer, initialState)
  const [isAuthenticated, setIsAuthenticated] = useState(localStorageService.getToken());
  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
