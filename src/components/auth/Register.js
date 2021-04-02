function Register() {
  return (
    <div className="col-md-6">
      <h4>ยังไม่มีบัญชี ? สร้างบัญชี</h4>
      <form>
        <div className="form-group">
          <input className="form-control" type="text" name="email" placeholder="อีเมล" />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" name="firstName" placeholder="ชื่อจริง" />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" name="lastName" placeholder="นามสกุล" />
        </div>
        <div className="form-group">
          <input className="form-control" type="password" name="password" placeholder="รหัสผ่าน" />
        </div>
        <div className="form-group">
          <input className="form-control" type="password" name="confirmPassword" placeholder="ยืนยันรหัสผ่าน" />
        </div>
        <button className="btn btn-success" type="submit">
          สมัคร
        </button>
      </form>
    </div>
  );
}

export default Register;
