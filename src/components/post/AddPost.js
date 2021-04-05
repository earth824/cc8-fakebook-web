function AddPost() {
  return (
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
  );
}

export default AddPost;
