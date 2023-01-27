function Header_Top() {
  return (
    <>
      <header>
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="header__top-contact item-email col-2">
                <span className="upcase">Email:</span>
                <span>ngocmai262626@gmail.com</span>
                <span className="border_right"></span>
              </div>
              <div className="header__top-contact item-phone col-2">
                <span className="upcase">Hotline:</span>
                <span>0378448674</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header_Top;
