import profile from '../assets/img/user1.jpg';
import Header from '../components/layout/Header';

function Profile() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4>แก้ไขโปรไฟล์</h4>
                <form>
                  <div className="form-group">
                    <input className="form-control" type="text" name="status" placeholder="สเตตัส" value="" />
                  </div>

                  <div className="form-group">
                    <input className="form-control" type="text" name="location" placeholder="ที่อยู่" value="" />
                  </div>

                  <div className="form-group">
                    <input className="btn btn-primary" type="submit" name="update_profile" value="บันทึก" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="media">
              <div className="media-left">
                <img
                  src={profile}
                  className="media-object"
                  style={{ width: '128px', height: '128px' }}
                  alt="รูปโปรไฟล์"
                />
              </div>
              <div className="media-body">
                <h2 className="media-heading">Jame Doe</h2>
                <p>สเตตัส: Coding is fun!, Location: กรุงเทพมหานคร</p>
              </div>
            </div>

            <hr />

            <div>
              <div class="panel panel-default">
                <div class="panel-body">
                  <p>สวัสดีทุกคน มาเขียนโค็ดกัน โค็ดดิ้งสนุกจริงๆนะ !!!</p>
                </div>
                <div class="panel-footer">
                  <span>posted 2021-1-27 20:45:01 by Jame Doe</span>
                  <span class="pull-right">
                    <a class="text-danger" href="/">
                      [ลบ]
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="panel panel-default">
              <div class="panel-body">
                <h4>เพื่อน</h4>
                <ul>
                  <li>
                    <a href="/">Liu Bue</a>
                    <a class="text-danger" href="/">
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

export default Profile;
