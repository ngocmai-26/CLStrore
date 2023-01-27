import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header_Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Trang Chủ
          </Link>
          <Link className="nav-item nav-link" to="/VietNam">
            Việt Nam
          </Link>
          <Link className="nav-item nav-link" to="/TrungQuoc">
            Trung Quốc
          </Link>
          <Link className="nav-item nav-link" to="/HanQuoc">
            Hàn Quốc
          </Link>
          <Link className="nav-item nav-link" to="/NhatBan">
            Nhật Bản
          </Link>
          <Link className="nav-item nav-link" to="/PhuKien">
            Phụ kiện
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header_Nav;
