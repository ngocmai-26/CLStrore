import "../style.css";
import PaginationPage from "../Pagination";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function VietNam({
  vietnam,
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
            {vietnam.map((item, key) => (
              <div className="product_item col-lg-3" key={key}>
                <div className="vietnam__item-cart vietnam__item-cart-name3 product_item-cart">
                  <a href="">
                    <img
                      alt="image"
                      src={item.image}
                      className="vietnam__item-img product_item-img"
                    />
                  </a>

                  <div className="vietnam__item-title product_item-title">
                    <div className="vietnam__item-name product_item-name">
                      <span>{item.name}</span>
                    </div>
                    <div className="vietnam__item-price product_item-price">
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

export default VietNam;
