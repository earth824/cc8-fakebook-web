import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import localStorageService from '../../services/localStorageService';

function RequestFriend() {
  const [requestFriends, setRequestFriends] = useState([]);
  useEffect(() => {
    const fetchRequestList = async () => {
      try {
        const res = await axios.get('/friends/request-list', {
          headers: {
            authorization: `Bearer ${localStorageService.getToken()}`
          }
        });
        setRequestFriends(res.data.friends);
      } catch (err) {}
    };

    fetchRequestList();
  }, []);

  const handleAcceptFriend = async (e, id) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/friends/${id}`,
        { status: 'FRIEND' },
        {
          headers: {
            authorization: `Bearer ${localStorageService.getToken()}`
          }
        }
      );
      const newRequestList = requestFriends.filter(el => id !== el.id);
      setRequestFriends(newRequestList);
    } catch {}
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
