import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;
function Register({setAddress, setEmail, setPassword, setName, onRegister, errorRegister, show, handleClose, setImage }) {
  
    return ( 
        <>
      <div className="container form__user">
        <form className="form__user-input">
          <h2>Đăng Ký</h2>
          <div className="mb-3 mt-3">
            <label htmlFor="name">Họ Tên:</label>
            <input
              type="name"
              className="form-control form-input"
              id="name"
              placeholder="Enter name"
              name="name"
              onChange={(e) => setName((prev) => (prev = e.target.value))}

            />
            {errorRegister.isErrorName && (
              <ErrorText className="form-text danger">
                {errorRegister.messageErrorName}
              </ErrorText>
            )}
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control form-input"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={(e)=> setEmail((prev) => prev = e.target.value)}
            />
            {errorRegister.isErrorEmail && (
              <ErrorText className="form-text danger">
                {errorRegister.messageErrorEmail}
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
              onChange={(e)=> setPassword((prev) => prev = e.target.value)}
            />
            {errorRegister.isErrorPassword && (
              <ErrorText className="form-text danger">
                {errorRegister.messageErrorPassword}
              </ErrorText>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="address">Địa chỉ:</label>
            <input
              type="address"
              className="form-control form-input"
              id="address"
              placeholder="Enter address"
              name="address"
              onChange={(e)=> setAddress((prev) => prev = e.target.value)}
            />
            {errorRegister.isErrorAddress && (
              <ErrorText className="form-text danger">
                {errorRegister.messageErrorAddress}
              </ErrorText>
            )}
          </div>
          <div className="form__right">
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <Link to="/DangNhap">
              <button type="button" className="btn btn-primary me-2">
                Đăng Nhập
              </button>
            </Link>
            <Link to="/DangKy" onClick={() => onRegister()}>
              <button type="button" className="btn btn-danger">
                Đăng Ký
              </button>
            </Link>
          </div>
        </form>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng kí thành công</Modal.Title>
        </Modal.Header>
        <Modal.Body>Chào mừng bạn đến với shop của chúng tôi, chúc bạn có một kì mua sắm thật vui vẻ!</Modal.Body>
      </Modal>
      </div>
    </>
     );
}

export default Register;