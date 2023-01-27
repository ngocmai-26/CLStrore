import { Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;

function Login({ setEmail, setPassword, onLogin, error, link, show, handleClose }) {
  return (
    <>
      <div className="container form__user">
        <form className="form__user-input">
          <h2>Đăng nhập</h2>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control form-input"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail((prev) => (prev = e.target.value))}
            />
            {error.isErrorEmail && (
              <ErrorText className="form-text danger">
                {error.messageErrorEmail}
              </ErrorText>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control form-input"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              onChange={(e) => setPassword((prev) => (prev = e.target.value))}
            />
            {error.isErrorPassword && (
              <ErrorText className="form-text danger">
                {error.messageErrorPassword}
              </ErrorText>
            )}
          </div>
          <div className="form__right">
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>

            <Link to="/DangNhap" onClick={() => onLogin()}>
              <button type="button" className="btn btn-primary me-2">
                Đăng Nhập
              </button>
            </Link>
            <Link to="/DangKy">
              <button type="button" className="btn btn-danger">
                Đăng Ký
              </button>
            </Link>
          </div>
        </form>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Đăng nhập thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xin chào, chúc bạn có một buổi mua sắm thật vui vẻ!</Modal.Body>
        <Modal.Footer>
          <Link to="/">
          <Button variant="primary" onClick={handleClose} >
            Đi đến trang chủ
          </Button>
          </Link>
          
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default Login;
