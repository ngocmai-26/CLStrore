import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaginationPage from "../Pagination";

function China({
  china,
  total,
  onChangePage,
  currentPage,
  setProductItem,
  onAddCart,
  show,
  handleClose,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3"></div>
        <div className="col-xl-9">
          <div></div>
          <div className="row">
            {china.map((item, key) => (
              <div className="product_item col-lg-3" key={key}>
                <div className="China__item-cart China__item-cart-name3 product_item-cart">
                  <a href="">
                    <img
                      alt="image"
                      src={item.image}
                      className="China__item-img product_item-img"
                    />
                  </a>

                  <div className="China__item-title product_item-title">
                    <div className="China__item-name product_item-name">
                      <span>{item.name}</span>
                    </div>
                    <div className="China__item-price product_item-price">
                      <span>{item.price} đ</span>
                    </div>
                  </div>
                  <div className="row group-button">
                    <div className="col-xl-8">
                      <Link to="/ChiTiet" onClick={() => setProductItem(item)}>
                        <button className="btn btn-primary">
                          Xem chi tiết
                        </button>
                      </Link>
                    </div>
                    <div className="col-xl-4">
                      <button
                        className="btn btn-warning"
                        onClick={() => onAddCart(item)}
                      >
                        Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <PaginationPage
              total={total}
              onChangePage={onChangePage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Đăng nhập thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn chưa đăng nhập</Modal.Body>
        <Modal.Footer>
          <Link to="/DangNhap">
            <Button variant="primary" onClick={handleClose}>
              Đăng nhập
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default China;
