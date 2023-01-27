import "./pay.css";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;

function Pay({
  cart,
  setVoucherText,
  onVoucher,
  voucher,
  sumPrice,
  onBill,
  setAddressBill,
  setPhoneBill,
  errorBill,
  setNameBill,
  setNoteBill,
  show,
  handleClose,
}) {
  return (
    <div className="checkout-page container sty-none">
      <div className="successfuls">Đặt hàng thành công</div>
      <div className="formCheckOut formAcount validate">
        <div className="row">
          <div className="col-checkout col-left col-xl-5 col-lg-6 col-12 ">
            <h4 className="col-title">
              <samp className="d-inline-flex align-items-center justify-content-center">
                1
              </samp>
              Thông tin khách hàng
            </h4>
            <div className="mt-2">
              Hãy nhập đầy đủ thông tin nhé. Nếu không sẽ đặt hàng không được
              bạn nhé!!!!!!!!
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="validate form-control "
                placeholder="Họ tên (*)"
                onChange={(e) => setNameBill((prev) => (prev = e.target.value))}
              />
              {errorBill.isErrorName && (
                <ErrorText className="form-text danger">
                  {errorBill.messageErrorName}
                </ErrorText>
              )}
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="validate form-control "
                placeholder="Điện thoại (*)"
                onChange={(e) =>
                  setPhoneBill((prev) => (prev = e.target.value))
                }
              />
              {errorBill.isErrorPhone && (
                <ErrorText className="form-text danger">
                  {errorBill.messageErrorPhone}
                </ErrorText>
              )}
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="validate form-control "
                placeholder="Địa chỉ chi tiết (*)"
                onChange={(e) =>
                  setAddressBill((prev) => (prev = e.target.value))
                }
              />
              {errorBill.isErrorAddress && (
                <ErrorText className="form-text danger">
                  {errorBill.messageErrorAddress}
                </ErrorText>
              )}
            </div>

            <div className="input-group mt-3 ">
              <textarea
                rows="6"
                placeholder="Ghi chú"
                onChange={(e) => setNoteBill((prev) => (prev = e.target.value))}
              />
            </div>
            <div className="mt-2">
              Đơn hàng trên website được xử lý trong giờ hành chính
            </div>
            <div className="mb-4">
              Vui lòng liên hệ fanpage ngoài khung giờ trên để được hỗ trợ
            </div>
          </div>

          <div className="col-checkout col-right col-xl-7 col-lg-12 col-12">
            <h4 className="col-title">
              <samp className="d-inline-flex align-items-center justify-content-center">
                3
              </samp>
              Thông tin giỏ hàng
            </h4>
            <div className="table-responsive scrollModal">
              <table className="table table-checkout" cellPadding="10">
                <thead>
                  <tr>
                    <th className="text-left" width="45%">
                      Tên sản phẩm
                    </th>
                    <th className="text-center" width="25%">
                      Số lượng
                    </th>
                    <th className="text-right" width="30%">
                      Thành tiền
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, key) => (
                    <tr className="cartItem" key={key}>
                      <td>
                        <span className="text">{item.name}</span>
                        <div className="clearfix">
                          Đơn giá:
                          <strong> {item.price} đ</strong>
                        </div>
                      </td>
                      <td className="text-center">{item.quality}</td>
                      <td className="text-right">
                        {" "}
                        {+item.price * item.quality} đ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="table table-checkout" cellPadding="10">
                <tfoot>
                  <tr>
                    <td colSpan="2">Phí vận chuyển</td>
                    <td className="text-right">0đ</td>
                  </tr>
                  <tr className="formCode form-group">
                    <td className="d-block  ml-2">Nhập mã ưu đãi</td>
                    <td className="input-group">
                      <input
                        type="text"
                        className="validate form-control"
                        placeholder="Mã giảm giá"
                        onChange={(e) =>
                          setVoucherText((prev) => (prev = e.target.value))
                        }
                      />
                      <p className="input-group-btn">
                        <button
                          className="btn-voucher"
                          type="button"
                          onClick={() => onVoucher()}
                        >
                          Áp dụng
                        </button>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <strong>Mã giảm giá</strong>
                    </td>
                    <td className="text-right">{voucher}đ</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <strong>Tổng cộng</strong>
                    </td>
                    <td className="text-right">{sumPrice} đ </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-xl-12 addto">
                <button
                  className="add"
                  width="100%"
                  type="button"
                  onClick={() => onBill()}
                >
                  <span className="pay text-center">Đặt Hàng</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Thanh toán thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cám ơn bạn đã ủng hộ chúng tôi!</Modal.Body>
        <Modal.Footer>
          <Link to="/">
          <Button variant="primary" onClick={handleClose} >
            Tiếp tục mua sắm
          </Button>
          </Link>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pay;
