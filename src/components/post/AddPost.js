import axios from '../../config/axios';
import { useState } from 'react';

function AddPost({ fetchPost }) {
  const [content, setContent] = useState('');
  const handleAddPost = async e => {
    e.preventDefault();
    const res = await axios.post('/posts', { text: content });
    setContent('');
    fetchPost();
  };

  return (
    <form onSubmit={handleAddPost}>
      <div className="input-group">
        <input
          className="form-control"
          value={content}
          onChange={e => setContent(e.target.value)}
          type="text"
          name="content"
          placeholder="Make a post..."
        />
        <span className="input-group-btn">
          <button className="btn btn-success" type="submit" name="post">
            Post
          </button>
        </span>
      </div>
    </form>
  );
}

export default AddPost;
