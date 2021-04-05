import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';

function Motto() {
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await axios.get('/users/me');
        setUser(res.data.user);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    getMe();
  }, []);

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        {error && <div className="alert alert-danger">{error}</div>}
        <h4>{`${user.firstName} ${user.lastName}`}</h4>
        <p>{user.motto}</p>
      </div>
    </div>
  );
}

export default Motto;
