import MenuAccount from "./MenuAccount";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function Account({
  account,
  listUser
}) {
  ///Change Password
  const [emailPass, setEmailPass] = useState('')
  const [passOld, setPassOld] = useState('')
  const [passNew, setPassNew] = useState('')
  const listUsers = JSON.parse(localStorage.getItem("listUsers"));
  const onChangePass = () => {
    var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (emailPass === account.username) {
      if (passOld !== account.password) {
        alert('Mật khẩu sai')
      } else {
        if (passNew === passOld) {
          alert('Mật khẩu trùng nhau')
        } else if (password_regex.test(passNew) === false) {
          alert(
            'Mật khẩu gồm ít nhất một chữ viết hoa, 1 chữ viết thường, chữ số, ký tự đặc biệt và có độ dài từ 8 đến 14 ký tự',
          )
        } else if (
          passNew !== passOld &&
          passNew != '' &&
          password_regex.test(passNew) === true
        ) {
          account.password = passNew
          alert('Đổi mật khẩu thành công')
        }
      }
    } else {
      alert('Email sai')
    }
    localStorage.setItem('account', JSON.stringify(account))
    listUsers.map((el) => {
      if (el.username === account.username) {
        el.password = account.password
      }
    })
    localStorage.setItem('listUsers', JSON.stringify(listUsers))
    
  }
  return (
    <article className="container py-3 main">
      <div className="row">
        <div className="blk-user col-md-12">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4 col-xl-6">
              <div className="blk-user-left blk-user-bor full d-block text-center">
                <div className="blk-user-avatar">
                  <img src="" alt="avatar" />
                  <h5>Ngọc Mai</h5>
                </div>
                <div className="blk-user-nav text-left">
                  <header>
                    <h2>Hồ sơ của tôi</h2>
                    <div className="content">
                      <h5>Quản lý thông tin hồ sơ để bảo mật tài khoản</h5>
                    </div>
                  </header>
                  <div className="form-group clearfix">
                    <div className="form-group clearfix m-3">
                      <div className="row">
                        <label className="control-label col-xl-3">
                          Email:
                          <samp>(*)</samp>
                        </label>
                        <input
                          type="text"
                          defaultValue={account.username}
                          className="col-xl-8"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group clearfix m-3">
                      <div className="row">
                        <label className="control-label col-xl-3">
                          Address:
                          <samp>(*)</samp>
                        </label>
                        <input
                          type="text"
                          defaultValue={account.address}
                          className="col-xl-8"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xl-6">
              <div className="blk-user-right blk-user-bor full d-block">
                <div className="formAcount validate clearfix">
                  {/* <div className="blk-user-avatar">
                      <img src={account.avatar} alt="avatar" />
                    </div> */}
                  <div className="row">
                    <div className="form-group clearfix col-12">
                      <h4>Cập nhật mật khẩu</h4>
                      <div className="form-group clearfix mt-2">
                        <div className="row">
                          <label className="col-xl-4 control-label">
                            Tên đăng nhập:
                            <samp>(*)</samp>
                          </label>
                          <div className="col-lg-6 col-xl-8">
                            <input
                              type="text"
                              className="validate form-control "
                              placeholder="Tên đăng nhập"
                              onChange={(e) => setEmailPass(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group clearfix mt-2">
                        <div className="row">
                          <label className="col-xl-4 control-label">
                            Mật khẩu cũ:
                            <samp>(*)</samp>
                          </label>
                          <div className="col-lg-6 col-xl-8">
                            <input
                              type="text"
                              className="validate form-control "
                              placeholder="Mật khẩu cũ"
                              onChange={(e) => setPassOld(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group clearfix mt-2">
                        <div className="row">
                          <label className="col-xl-4 control-label">
                            Mật khẩu mới:
                            <samp>(*)</samp>
                          </label>
                          <div className="col-lg-6 col-xl-8">
                            <input
                              type="text"
                              className="validate form-control "
                              placeholder="Mật khẩu mới"
                              onChange={(e) => setPassNew(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group clearfix">
                        <div className="row ">
                          <label className="col-xl-3 control-label"></label>
                          <div className="col-xl-6 text-end pt-3">
                            <button
                              className="btn btn-primary"
                              onClick={() => onChangePass()}
                            >
                              Cập nhật
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Account;
