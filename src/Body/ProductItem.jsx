import classNames from "classnames";

function ProductItem({
  productItem,
  setComment,
  onClickComment,
  listComment,
  displayComment,
}) {
  return (
    <div className="container">
      <div className="product__item">
        <div className="row">
          <div className="col-xl-4">
            <img src={productItem.image} alt="" className="product__item-img" />
          </div>
          <div className="col-lg-8">
            <h4>{productItem.name}</h4>
            <div className="product_item-price">
              <span>{productItem.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__cmt">
        <div className="product__cmt-customer">
          <h4>Ý kiến của khách hàng</h4>
          <div className={classNames(
              { displayComment: !displayComment },
            )}>
            {listComment.map((item, key) => (
              <div className="row mt-3 " key={key}>
                <div className="col-sm-2 col-md-2 col-lg-1 col-xl-1">
                  <img
                    src="https://kinhdoanh5phut.com/images/noavatar.png"
                    width="80%"
                    className="product__cmt--img"
                  />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-7">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                      <b>{item.account.name}</b>
                    </div>
                  </div>
                  <h6>{item.comment}</h6>
                </div>
              </div>
            ))}
          </div>

          <div
            className={classNames(
              { displayComment: displayComment },
              "row mt-3 "
            )}
          >
            <div className="product__cmt--none">
              <p>Hiện chưa có bình luận nào</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
            <h4>Thêm nhận xét</h4>
            <textarea
              rows="6"
              placeholder="Nội Dung"
              className="cmt-text"
              onChange={(e) => setComment((prev) => (prev = e.target.value))}
            ></textarea>
            <div className="send col-lg-4 col-md-2">
              <button
                className="btn btn-outline-danger"
                onClick={() => onClickComment()}
              >
                Gửi đi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
