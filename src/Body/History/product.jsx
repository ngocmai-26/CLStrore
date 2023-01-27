import { Ellipsis } from "react-bootstrap/esm/PageItem";
import "./style.css"

function History_Pro({ historyBill }) {
  let a= 0
  return (
    <>
      <article className="container py-3 main">
        <h5>Lịch sử đơn hàng</h5>
        <table className="table table-cart">
          <thead>
            <tr className="border">
            <th width="10%" className=" text-center">
                STT
              </th>
              <th width="20%" className=" text-center">
                Sản phẩm{" "}
              </th>
              <th width="25%" className="text-center">
                Tên sản phẩm
              </th>
              <th width="15%" className="text-center d-none d-md-table-cell">
                Đơn giá
              </th>
              <th width="15%" className="text-center d-none d-md-table-cell">
                Số lượng
              </th>
              <th width="15%" className="text-center d-none d-md-table-cell">
                Tổng
              </th>
            </tr>
          </thead>
          <tbody className="mt-1">
            {historyBill.map((el) => (
              <>
                {el.product.map((item, key) => (
                  <tr className="cart-item border" key={key}>
                    <>
                      <td>{a+=1}</td>
                      <td className="cart-img">
                        <div className="d-flex align-items-center">
                          <i className="d-none fa fa-pink fa-1x5 fa-check-square"></i>
                          <a href="#">
                            <img src={item.image} className="card-img" alt="..." />
                          </a>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="text">
                          <h5>{item.name}</h5>
                        </span>
                      </td>
                      <td className="text-center d-none d-md-table-cell">
                        <strong className="d-block">{item.price}</strong>
                      </td>
                      <td className="text-center d-none d-md-table-cell">
                        <strong className="d-block">{item.quality}</strong>
                      </td>
                      <td className="text-center d-none d-md-table-cell">
                        <strong className="d-block">{item.price* +item.quality}</strong>
                      </td>
                    </>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default History_Pro;
