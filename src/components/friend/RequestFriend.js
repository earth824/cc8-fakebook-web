import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from '../../config/axios';
import { AuthContext } from '../../contexts/AuthContextProvider';
import localStorageService from '../../services/localStorageService';

function RequestFriend() {
  const [requestFriends, setRequestFriends] = useState([]);
  const history = useHistory();

  const { setIsAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    const fetchRequestList = async () => {
      try {
        const res = await axios.get('/friends/request-list');
        setRequestFriends(res.data.friends);
      } catch (err) {}
    };

    fetchRequestList();
  }, []);

  const handleAcceptFriend = async (e, id) => {
    e.preventDefault();
    try {
      await axios.patch(`/friends/${id}`, { status: 'FRIEND' });
      const newRequestList = requestFriends.filter(el => id !== el.id);
      setRequestFriends(newRequestList);
    } catch (err) {
      if (err.response.status === 401) {
        localStorageService.clearToken();
        setIsAuthenticated(false);
        history.push('/');
      }
    }
  };

  const handleRejectFriend = id => {};

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <h4>คำขอเป็นเพื่อน</h4>
        <ul>
          {requestFriends.map(el => (
            <li key={el.id}>
              <a href="/">{`${el.firstName} ${el.lastName}`}</a>
              <a className="text-success" href="/" onClick={e => handleAcceptFriend(e, el.id)}>
                [รับ]
              </a>
              <a className="text-danger" href="/" onClick={() => handleRejectFriend(el.id)}>
                [ปฏิเสธ]
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RequestFriend;
