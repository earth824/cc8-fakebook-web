import { Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Auth} />
      {/* <Header /> */}
    </Switch>
  );
}

export default App;
