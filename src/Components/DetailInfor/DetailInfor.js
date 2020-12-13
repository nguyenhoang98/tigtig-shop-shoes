import React, { useState } from "react";
import { Collapse } from "react-collapse";
import "./DetailInfor.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

DetailInfor.propTypes = {};

function DetailInfor(props) {
  const [isOpenCollapse, setisOpenCollapse] = useState({
    value_1: false,
    value_2: false,
    value_3: false,
  });
  function isToggleCollap_1(value) {
    setisOpenCollapse({
      value_1: !value,
    });
  }
  function isToggleCollap_2(value) {
    setisOpenCollapse({
      value_2: !value,
    });
  }
  function isToggleCollap_3(value) {
    setisOpenCollapse({
      value_3: !value,
    });
  }
  return (
    <div className="product detail-infor">
      <h2
        onClick={() => isToggleCollap_1(isOpenCollapse.value_1)}
        className={classNames("product-title", {
          "collapse-action": isOpenCollapse.value_1,
        })}
      >
        {" "}
        Thông tin Sản Phẩm{" "}
      </h2>
      <Collapse
        isOpened={isOpenCollapse.value_1}
        className="product__information"
      >
        <p>Gender: Unisex</p>
        <p>Size run: 35 – 46</p>
        <p>Upper: Canvas</p>
        <p>Outsole: Rubber</p>
      </Collapse>
      <h2
        onClick={() => isToggleCollap_2(isOpenCollapse.value_2)}
        className={classNames("product-title", {
          "collapse-action": isOpenCollapse.value_2,
        })}
      >
        Quy Định Đổi Sản Phẩm
      </h2>
      <Collapse
        isOpened={isOpenCollapse.value_2}
        className="product__exchange-regulations"
      >
        <ul>
          <li>
            {" "}
            Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết
            định.{" "}
          </li>
          <li>
            Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể
            từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận
            hàng.
          </li>
          <li>
            Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp,
            nhãn mác.
          </li>
          <li>
            Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám
            bẩn, biến dạng.
          </li>
          <li>
            Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết
            size cần đổi, bạn có thể đổi sang 01 sản phẩm khác: <br />- Nếu sản
            phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù
            khoảng chênh lệch tại thời điểm đổi (nếu có). <br />- Nếu bạn mong
            muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại
            tiền.
          </li>
          <li>
            Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong
            hệ thống. Vui lòng chọn sản phẩm khác.
          </li>
          <li>
            Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong
            bạn thông cảm.
          </li>
        </ul>
      </Collapse>
      <h2
        onClick={() => isToggleCollap_3(isOpenCollapse.value_3)}
        className={classNames("product-title", {
          "collapse-action": isOpenCollapse.value_3,
        })}
      >
        Bảo Hành Thế Nào ?
      </h2>
      <Collapse isOpened={isOpenCollapse.value_3} className="product__warranty">
        <p>
          Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm
          tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế,
          hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong
          bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ
          bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc
          gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong
          giờ hành chính:
        </p>
        <p>
          Lầu 1, 75/1 Mai Thị Lựu, P. Đa Kao, Q1, TP.HCM Hotline: 028 3526 7774
        </p>
      </Collapse>
    </div>
  );
}

export default DetailInfor;
