import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        Fakebuck
      </Link>
    </div>
  );
}

export default Logo;
