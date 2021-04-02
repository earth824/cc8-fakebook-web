function Login() {
  return (
    <div className="col-md-6">
      <h4>ลงชื่อเข้าสู่ระบบ</h4>
      <form>
        <div className="form-group">
          <input className="form-control" type="text" name="email" placeholder="อีเมล" value="" />
        </div>
        <div className="form-group">
          <input className="form-control" type="password" name="password" placeholder="รหัสผ่าน" value="" />
        </div>
        <button className="btn btn-primary" type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}

export default Login;
