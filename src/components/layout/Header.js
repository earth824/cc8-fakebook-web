import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Logo />
          {isAuthenticated && <Menu />}
        </div>
      </nav>
    </>
  );
}

export default Header;
