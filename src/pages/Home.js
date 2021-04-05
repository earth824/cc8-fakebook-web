import AddFriend from '../components/friend/AddFriend';
import FriendList from '../components/friend/FriendList';
import RequestFriend from '../components/friend/RequestFriend';
import Header from '../components/layout/Header';
import AddPost from '../components/post/AddPost';
import PostList from '../components/post/PostList';
import Motto from '../components/profile/Motto';

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <Motto />
            <RequestFriend />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
          <div className="col-md-3">
            <AddFriend />
            <FriendList />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
