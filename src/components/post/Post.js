import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';

function Post({ text, id, createdAt, User: { id: userId, firstName, lastName }, setTriggerDelete }) {
  const { user } = useContext(AuthContext);

  const handleDeletePost = async postId => {
    try {
      await axios.delete(`/posts/${postId}`);
      setTriggerDelete(prev => !prev);

      // setPosts(prevPost => prevPost.filter(item => item.id !== postId));
    } catch (err) {}
  };

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <p>{text}</p>
      </div>
      <div className="panel-footer">
        <span>
          posted {createdAt} by {firstName} {lastName}
        </span>
        {user.id === userId && (
          <span className="pull-right">
            <button className="text-danger" onClick={() => handleDeletePost(id)}>
              [ลบ]
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Post;
