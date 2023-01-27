function Information({ account }) {
  return (
    <>
      <div className="col-md-9 col-sm-12 col-xl-9">
        <div className="blk-user-right blk-user-bor full d-block">
          <header>
            <h2>Hồ sơ của tôi</h2>
            <div className="content">
              <h5>Quản lý thông tin hồ sơ để bảo mật tài khoản</h5>
            </div>
          </header>
          <div className="formAcount validate clearfix">
            {/* <div className="blk-user-avatar">
                      <img src={account.avatar} alt="avatar" />
                    </div> */}
            <div className="row">
              <div className="form-group clearfix col-6">
                <div className="row">
                  <label className="col-md-3 control-label">
                    Họ tên:
                    <samp>(*)</samp>
                  </label>
                  <div className="col-lg-6 col-md-9">
                    <span>{account.name}</span>
                  </div>
                </div>
                <div className="form-group clearfix">
                  <div className="row">
                    <label className="col-md-3 control-label">
                      Email:
                      <samp>(*)</samp>
                    </label>
                    <div className="col-lg-6 col-md-9">
                      <span>{account.username}</span>
                    </div>
                  </div>
                </div>
                <div className="form-group clearfix">
                  <div className="row">
                    <label className="col-md-3 control-label">
                      Địa chỉ:
                      <samp>(*)</samp>
                    </label>
                    <div className="col-lg-6 col-md-9">
                      <span>{account.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group clearfix col-6">
                <h4>Cập nhật mật khẩu</h4>
                <div className="form-group clearfix mt-2">
                  <div className="row">
                    <label className="col-md-3 control-label">
                      Tên đăng nhập:
                      <samp>(*)</samp>
                    </label>
                    <div className="col-lg-6 col-md-9">
                      <input
                        type="text"
                        className="validate form-control "
                        placeholder="Tên đăng nhập"
                        // onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group clearfix mt-2">
                  <div className="row">
                    <label className="col-md-3 control-label">
                      Mật khẩu cũ:
                      <samp>(*)</samp>
                    </label>
                    <div className="col-lg-6 col-md-9">
                      <input
                        type="text"
                        className="validate form-control "
                        placeholder="Mật khẩu cũ"
                        // onChange={(e) => setPassOld(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group clearfix mt-2">
                  <div className="row">
                    <label className="col-md-3 control-label">
                      Mật khẩu mới:
                      <samp>(*)</samp>
                    </label>
                    <div className="col-lg-6 col-md-9">
                      <input
                        type="text"
                        className="validate form-control "
                        placeholder="Mật khẩu mới"
                        // onChange={(e) => setPassNew(e.target.value)}
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
                        //   onClick={() => onClickChange(account)}
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
    </>
  );
}

export default Information;
