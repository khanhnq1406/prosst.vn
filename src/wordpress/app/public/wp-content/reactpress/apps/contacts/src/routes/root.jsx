let path = "/wp-content/reactpress/apps/products/dist/";
if (process.env.NODE_ENV === "development") path = "/";
export default function Root() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    for (let index = 0; index < e.target.length; index++) {
      console.log(e.target[index].name, ":", e.target[index].value);
    }
  };
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={`${path}logo.png`} />
        </div>
        <div className="navigate-wrapper">
          <div className="navigate-link">
            <a href="/">Trang chủ</a>
          </div>
          <div className="navigate-link">
            <a href="/gioi-thieu">Giới thiệu</a>
          </div>
          <div className="navigate-link">
            <a href="/san-pham">Sản phẩm</a>
          </div>
          <div className="navigate-link">
            <a href="/du-an">Dự án</a>
          </div>
          <div className="navigate-link active">
            <a href="/lien-he">Liên hệ</a>
          </div>
        </div>
      </div>

      <div className="title">Liên hệ với chúng tôi</div>

      <div className="content">
        <div className="contact-info">
          <div className="contact-title">Thông tin liên hệ</div>
          <div className="contact-sub">
            Quý khách có yêu cầu về tư vấn giải pháp, sản phẩm, dự án vui lòng
            liên hệ với chúng tôi qua thông tin sau:
          </div>
          <div className="company-name">
            CÔNG TY TNHH KỸ THUẬT GIẢI PHÁP LƯU TRỮ PRO
          </div>
          <div className="company-address">
            Địa chỉ: 46 Nguyễn Hữu Cảnh, Khu phố Đông A, Phường Đông Hòa, Thành
            phố Dĩ An, Tỉnh Bình Dương
          </div>
          <div className="contact-email">Email: sale@prosst.vn</div>
          <div className="contact-hotline">Hotline: 0938 489 568</div>
        </div>
        <form onSubmit={handleFormSubmit} className="contact-form">
          {/* Name */}
          <label className="input-label">
            Tên quý khách <div className="required-label">&nbsp;*</div>
          </label>
          <input name="customer-name" required="true"></input>

          <label className="input-label">Tên công ty</label>
          <input name="company-name"></input>

          <label className="input-label">
            Điện thoại <div className="required-label">&nbsp;*</div>
          </label>
          <input name="phone" required="true"></input>

          <label className="input-label">Email</label>
          <input name="email"></input>

          <label className="input-label">
            Tiêu đề <div className="required-label">&nbsp;*</div>
          </label>
          <input name="title" required="true"></input>

          <label className="input-label">
            Mô tả nội dung <div className="required-label">&nbsp;*</div>
          </label>
          <input name="content" required="true"></input>

          <input
            type="submit"
            value="Gửi thông tin"
            className="submit-btn"
          ></input>
        </form>
      </div>
    </div>
  );
}
