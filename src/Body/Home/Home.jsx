import { Carousel } from "react-bootstrap";
import "../style.css";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

function Home({
  home,
  total,
  onChangePage,
  currentPage,
  listAdjunct,
  onSeeMore,
}) {
  return (
    <>
      <div className="banner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://toanthaydinh.com/wp-content/uploads/2020/04/anh-bia-fb-de-thuong-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://demoda.vn/wp-content/uploads/2022/02/anh-bia-cute-de-thuong-cho-fb.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-img"
              src="https://pdp.edu.vn/wp-content/uploads/2021/06/anh-bia-fb-cute.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="product__clothes">
        <div className="container">
          <div className="product__clothes--header">
            <div className="product__clothes--header-item">
              <h4>Trang phục nổi bật</h4>
            </div>
          </div>
          <div className="product__clothes--slide">
            <div className="row">
              {home.map((item, key) => (
                <div className="product_item col-lg-2" key={key}>
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
                    {/* <div className="row group-button">
                  <div className="col-xl-8">
                    <Link to="/ChiTiet" onClick={() => setProductItem(item)}>
                      <button className="btn btn-primary">
                        Xem chi tiết
                      </button>
                    </Link>
                  </div>
                  <div className="col-xl-4">
                    <button className="btn btn-warning" onClick={()=>onAddCart(item)}>Cart</button>
                  </div>
                </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination-productHome">
              <Pagination
                currentPage={currentPage}
                totalPages={total}
                changeCurrentPage={onChangePage}
                theme="bottom-border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product__clothes">
        <div className="container">
          <div className="product__clothes--header">
            <div className="product__clothes--header-item">
              <h4>Sản phẩm nổi bật</h4>
            </div>
          </div>
          <div className="product__adjunct--slide">
            <div className="row">
              {listAdjunct.map((item, key) => (
                <div className="product_item col-lg-2" key={key}>
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
                    {/* <div className="row group-button">
                  <div className="col-xl-8">
                    <Link to="/ChiTiet" onClick={() => setProductItem(item)}>
                      <button className="btn btn-primary">
                        Xem chi tiết
                      </button>
                    </Link>
                  </div>
                  <div className="col-xl-4">
                    <button className="btn btn-warning" onClick={()=>onAddCart(item)}>Cart</button>
                  </div>
                </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="product__adjunct--slide-btn">
              <button
                onClick={() => onSeeMore()}
                className="btn btn-outline-danger"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
