import { Link } from "react-router-dom";
import "./style.css"

function MenuAccount() {
  return (
    <>
      <div className="col-md-3 col-sm-12 mb-4 col-xl-3">
        <div className="blk-user-left blk-user-bor full d-block text-center">
          <div className="blk-user-avatar">
            <img src="" alt="avatar" />
            <h5>Ngọc Mai</h5>
          </div>
          <div className="blk-user-nav text-left">
            <ul>
              <li>
                <Link to="/ThongtinA">
                  Thông tin tài khoản
                </Link>
              </li>
              <li>
                <a href="matkhau.html">Đổi mật khẩu</a>
              </li>
              <li>
                <a href="lichsu.html">Lịch sử đơn hàng</a>
              </li>
              <li>
                <a href="yeuthich.html">Danh sách yêu thích</a>
              </li>
              <li>
                <a href="index1.html">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuAccount;
