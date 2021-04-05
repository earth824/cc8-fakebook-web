import { createContext, useState } from 'react';
import localStorageService from '../services/localStorageService';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // const [state,dispatch] = useReducer(reducer, initialState)
  const [isAuthenticated, setIsAuthenticated] = useState(localStorageService.getToken());
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
