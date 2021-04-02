import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContextProvider';

const privateRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
];

const publicRoutes = [
  {
    path: '/',
    component: Auth
  }
];

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Switch>
      {isAuthenticated &&
        privateRoutes.map((el, index) => <Route key={index} exact path={el.path} component={el.component} />)}

      {!isAuthenticated &&
        publicRoutes.map((el, index) => <Route key={index} exact path={el.path} component={el.component} />)}

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
