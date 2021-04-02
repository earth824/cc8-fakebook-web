import { useContext, useState } from 'react';
import axios from '../../config/axios';
import localStorageService from '../../services/localStorageService';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { useHistory } from 'react-router-dom';

function Register() {
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({});

  const { setIsAuthenticated } = useContext(AuthContext);

  const history = useHistory();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (!value) {
        setError(prev => ({ ...prev, email: 'email is required' }));
      } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        setError(prev => ({ ...prev, email: 'invalid email address' }));
      } else {
        setError(prev => ({ ...prev, email: false }));
      }
    }

    if (name === 'firstName') {
    }
  };

  const handleSubmit = e => {
    const { email, firstName, lastName, password, confirmPassword } = input;
    e.preventDefault();
    axios
      .post('/register', {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
      })
      .then(res => {
        localStorageService.setToken(res.data.token);
        setIsAuthenticated(true);
        history.push('/');
      })
      .catch(err => {
        if (err.response) {
          setError({ server: err.response.data.message });
        } else {
          setError({ front: err.message });
        }
      });
  };

  return (
    <div className="col-md-6">
      <h4>ยังไม่มีบัญชี ? สร้างบัญชี</h4>
      {error.server && <div className="alert alert-danger">{error.server}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="อีเมล"
            value={input.email}
            onChange={handleInputChange}
          />
        </div>
        {error.email && (
          <span class="help-block" style={{ color: 'red' }}>
            {error.email}
          </span>
        )}
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="ชื่อจริง"
            value={input.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="lastName"
            placeholder="นามสกุล"
            value={input.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            value={input.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            placeholder="ยืนยันรหัสผ่าน"
            value={input.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          สมัคร
        </button>
      </form>
    </div>
  );
}

export default Register;
