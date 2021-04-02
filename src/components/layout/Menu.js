import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import localStorageService from '../../services/localStorageService';

function Menu() {
  const history = useHistory();

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = e => {
    e.preventDefault();
    localStorageService.clearToken();
    setIsAuthenticated(false);
    history.push('/');
  };

  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <a href="/" onClick={handleLogout}>
          Logout
        </a>
      </li>
    </ul>
  );
}

export default Menu;
