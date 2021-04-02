import { useContext, useState } from 'react';
import axios from '../../config/axios';
import { useHistory } from 'react-router-dom';
import localStorageService from '../../services/localStorageService';
import { AuthContext } from '../../contexts/AuthContextProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const { setIsAuthenticated } = useContext(AuthContext);

  const history = useHistory();

  const validateInput = () => {
    const newError = {};
    if (!email) newError.email = 'email is required';
    if (!password) newError.password = 'password is required';
    setError(newError);
  };

  const handlerSubmit = async e => {
    try {
      e.preventDefault();
      validateInput();
      const res = await axios.post('/login', { email, password });
      localStorageService.setToken(res.data.token);
      setIsAuthenticated(true);
      history.push('/');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="col-md-6">
      <h4>ลงชื่อเข้าสู่ระบบ</h4>
      <form onSubmit={handlerSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="อีเมล"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error.email && (
            <span className="help-block" style={{ color: 'red' }}>
              {error.email}
            </span>
          )}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error.password && (
            <span className="help-block" style={{ color: 'red' }}>
              {error.password}
            </span>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}

export default Login;
