let path = "/wp-content/reactpress/apps/prosst-react/dist/";
if (process.env.NODE_ENV === "development") path = "/";
import $ from "jquery";
import { useState } from "react";
const Footer = () => {
  const [classAttribute, setClass] = useState({
    show: "",
    status: "",
  });
  const contactSubmit = (e) => {
    e.preventDefault();
    let data = [];
    for (let index = 0; index < e.target.length; index++) {
      data.push({ name: e.target[index].name, value: e.target[index].value });
    }
    $.ajax({
      type: "POST",
      url: "https://prosst.vn/sendEmail.php",
      data: data,
      success(data) {
        if (data.includes("success")) {
          setClass({ show: "show", status: "success" });
        } else {
          setClass({ show: "show", status: "failed" });
        }
      },
    });
  };
  const popupButtonHandle = () => {
    setClass({ show: "", status: "" });
  };
  return (
    <>
      <div className="footer-wrapper">
        <div className="grid-container">
          <div class="grid-item-1">
            <div className="logo">
              <img src={`${path}logo.png`} />
            </div>
            <div className="lang">
              Ngôn ngữ
              <div className="vn">
                <a href="#">
                  <img src={`${path}vn.png`} alt="" />
                  <p>VN</p>
                </a>
              </div>
              <div className="en">
                <a href="#">
                  <img src={`${path}en.png`} alt="" />
                  <p>EN</p>
                </a>
              </div>
            </div>
          </div>
          <div class="grid-item-2">
            <div className="contact-title">Liên hệ với chúng tôi</div>
            <form onSubmit={contactSubmit}>
              <div className="grid-container-2">
                <div class="grid-item-2-1">
                  <div className="contact-label">
                    Tên quý khách <div className="required-label">&nbsp;*</div>
                  </div>
                  <input type="text" name="customer-name" required="true" />
                </div>
                <div class="grid-item-2-2">
                  <div className="contact-label">Tên công ty</div>
                  <input type="text" name="company-name" />
                </div>
                <div class="grid-item-2-3">
                  <div className="contact-label">
                    Điện thoại <div className="required-label">&nbsp;*</div>
                  </div>
                  <input type="text" name="phone" required="true" />
                </div>
                <div class="grid-item-2-4">
                  <div className="contact-label">Email</div>
                  <input type="text" name="email" />
                </div>
                <div class="grid-item-2-5">
                  <div className="contact-label">
                    Tiêu đề <div className="required-label">&nbsp;*</div>
                  </div>
                  <input type="text" name="title" required="true" />
                </div>
                <div class="grid-item-2-6">
                  <div className="contact-label">
                    Mô tả nội dung <div className="required-label">&nbsp;*</div>
                  </div>
                  <input type="text" name="content" required="true" />
                </div>
                <div class="grid-item-2-7">
                  <input type="submit" value="Gửi thông tin" />
                </div>
              </div>
            </form>
            <div className="grid-item-2-8">
              <div className={`popup ${classAttribute.show}`}>
                <span
                  className={`popuptext ${classAttribute.show} ${classAttribute.status}`}
                  id="myPopup"
                >
                  <div className="title"></div>
                  <div className="message"></div>
                  <button onClick={popupButtonHandle}>OK</button>
                </span>
              </div>
            </div>
          </div>
          <div class="grid-item-3">
            <div className="info-title">Thông tin liên hệ</div>
            <div className="info-content">
              <p>PROSST - Nhà tích hợp hàng đầu trong lĩnh vực tự động hóa</p>
              <p>
                Địa chỉ: 46 Nguyễn Hữu Cảnh, Khu phố Đông A, <br /> Phường Đông
                Hòa, Thành phố Dĩ An, Tỉnh Bình Dương
                <br />
                Email: sale@prosst.vn
                <br />
                Hotline: 0938 489 568
              </p>
            </div>
          </div>
          <div class="grid-item-4">
            <div className="grid-container-4">
              <div class="grid-item-4-1">
                <div className="grid-4-header ">Sản phẩm</div>
                <div className="grid-4-list">
                  <a href="#">Thiết bị kho, kệ</a>
                  <br />
                  <a href="#">Linh kiện AGV</a> <br />
                  <a href="#">Thiết bị tủ điện</a> <br />
                  <a href="#">Phụ tùng robot</a> <br />
                  <a href="#">Máy tính công nghiệp</a> <br />
                  <a href="#">Camera công nghiệp</a> <br />
                  <a href="#">Thấu kính</a> <br />
                  <a href="#">Đèn công nghiệp</a> <br />
                  <a href="#">Đồ gá</a> <br />
                </div>
              </div>
              <div class="grid-item-4-4">
                <div className="grid-4-header ">Giải pháp</div>
                <div className="grid-4-list">
                  <a href="#">Giải pháp warehouse, Logistic</a> <br />
                  <a href="#">Giải pháp robot, Chế tạo máy</a> <br />
                  <a href="#">Giải pháp Computer Vision</a> <br />
                </div>
              </div>
              <div class="grid-item-4-3">
                <div className="grid-4-header ">Về PROSST</div>
                <div className="grid-4-list">
                  <a href="#">Giới thiệu</a> <br />
                  <a href="#">Liên hệ</a> <br />
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item-5">
            <div className="copyright">
              Copyright © 2024 Công ty TNHH PROSST
            </div>
            <div className="powered">Powered by PROSST</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
