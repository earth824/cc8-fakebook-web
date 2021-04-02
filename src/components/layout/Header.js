import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Logo />
          <Menu />
        </div>
      </nav>
    </>
  );
}

export default Header;
