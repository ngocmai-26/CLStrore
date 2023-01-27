import classNames from "classnames";
import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header_center({ cart, onIncrease, onDecrease, setSearch, display, displayAccount, account, onLogout, onHistoryPro }) {
  var number = 0;
  cart.map((item) => {
    number += 1;
  });
  return (
    <div className="header_center">
      <div className="container">
        <div className="row">
          <div className="header__center-logo col-xl-2">
            <Link to="/">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                alt="logo"
                className="logo_shop"
              />
            </Link>
          </div>
          <div className="header__center-search col-xl-8">
            <div className="input-group group-search">
              <div className="form-outline input_search">
                <input type="text" className="form-control" onChange={(e) =>setSearch((prev) => prev = e.target.value)} placeholder="Tìm kiếm..." />
              </div>
              {/* <div className="history__search">
                <ul className="history__search--group">
                  <li className="history__search--item">
                    mjhas
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="header__center-group col-xl-2">
            <div className="row">
              <div className="col-xl-4 header__center-item item-cart">
                <button className="shop-cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <div className="cart_number">{number}</div>
                <div className={classNames({display: display}, "cart__item")}>
                  <div className="nav-cart">
                    <div  className="nav-cart-list" >
                      {cart.map((item, key) => (
                        <a href="#" className="nav-cart-item row" key={key}>
                          <div className="col-lg-4">
                            <img
                              src={item.image}
                              alt=""
                              className="car-item-img"
                            />
                          </div>
                          <div className="col-lg-8">
                            <div className="name-product">{item.name}</div>
                            <div className="price-product ">
                              <div className="vietnam__item-price">
                                <span>{item.price} đ</span>
                              </div>
                            </div>
                            <div className="buttons_added">
                              <button
                                className="minus is-form"
                                type="button"
                                onClick={() => onDecrease(item)}
                              >
                                -
                              </button>
                              <input
                                className="input-qty"
                                name=""
                                type="number"
                                value={item.quality}
                                disabled
                              />
                              <button
                                className="plus is-form"
                                type="button"
                                onClick={() => onIncrease(item)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="cart-delete">
                            <button className="cart-btn-delete">X</button>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <Link to="/ThanhToan" className="cart-btn">
                    <button className="btn btn-warning">Thanh toán</button>
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 header__center-item item-account">
                <Link to="/DangNhap" className={classNames({displayAccount: displayAccount}, "header__center-item-link")}>
                  <i className="fa-solid fa-user"></i>
                  <span>Đăng nhập</span>
                </Link>
                <div className={classNames({displayAccount: !displayAccount}, "dropdown_toggle header__center-item-link account-item")}>
                  <i className="fa-solid fa-user"></i>
                  <span>{account.name}</span>
                  <div className="dropdown_menu">
                    <Link to="/TaiKhoan"
                      className="dropdown_item btn"
                    >
                      Thông tin tài khoản
                    </Link>
                    <Link to="/history"
                      className="dropdown_item btn"
                      onClick={() => onHistoryPro()}
                    >
                      Lịch sử đơn hàng
                    </Link>
                    <button
                      className="dropdown_item btn"
                      onClick={() => onLogout()}
                    >
                      Đăng xuất
                    </button>
                  </div>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_center;
