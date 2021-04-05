import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { AuthContext } from '../../contexts/AuthContextProvider';
import AddPost from './AddPost';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [triggerDelete, setTriggerDelete] = useState(false);

  const fetchPost = async () => {
    const res = await axios.get('/posts/inc-friend');
    setPosts(res.data.posts);
  };

  useEffect(() => {
    fetchPost();
  }, [triggerDelete]);
  console.log(posts);

  return (
    <>
      <AddPost setPosts={setPosts} fetchPost={fetchPost} />
      <hr />
      <div>
        {posts.map(post => (
          <Post key={post.id} {...post} setTriggerDelete={setTriggerDelete} />
        ))}
      </div>
    </>
  );
}

export default PostList;
