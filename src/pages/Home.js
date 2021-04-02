import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import axios from '../config/axios';
import localStorageService from '../services/localStorageService';

function Home() {
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
      const res = await axios.patch(
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
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>Jame Doe</h4>
                <p>Coding is fun!</p>
              </div>
            </div>

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
                  {/* <li>
                    <a href="/">John Doe</a>
                    <a className="text-success" href="/">
                      [รับ]
                    </a>
                    <a className="text-danger" href="/">
                      [ปฏิเสธ]
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="input-group">
                <input className="form-control" type="text" name="content" placeholder="Make a post..." />
                <span className="input-group-btn">
                  <button className="btn btn-success" type="submit" name="post">
                    Post
                  </button>
                </span>
              </div>
            </form>
            <hr />

            <div>
              <div className="panel panel-default">
                <div className="panel-body">
                  <p>สวัสดีทุกคน มาเขียนโค็ดกัน โค็ดดิ้งสนุกจริงๆนะ !!!</p>
                </div>
                <div className="panel-footer">
                  <span>posted 2021-1-27 20:45:01 by Jame Doe</span>
                  <span className="pull-right">
                    <a className="text-danger" href="/">
                      [ลบ]
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>เพิ่มเพื่อน</h4>
                <ul>
                  <li>
                    <a href="#">Michael Schneider</a>
                    <a href="/">[เพิ่ม]</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-body">
                <h4>เพื่อน</h4>
                <ul>
                  <li>
                    <a href="#">Liu Bue</a>
                    <a className="text-danger" href="/">
                      [อันเฟรนด์]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
