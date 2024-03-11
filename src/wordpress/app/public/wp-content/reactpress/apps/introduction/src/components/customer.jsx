let path = "/wp-content/reactpress/apps/introduction/public/customer/";
if (process.env.NODE_ENV === "development") path = "/customer/";
const Customer = () => {
  return (
    <div className="customer-wrapper">
      <div className="customer-title">KHÁCH HÀNG TIÊU BIỂU</div>
      <div className="customer-logo">
        <div className="line-break">
          <img src={`${path}dhl.png`} />
          <img src={`${path}kinhdo.png`} />
          <img src={`${path}ajinomoto.png`} />
        </div>
        <div className="line-break">
          <img src={`${path}danon.png`} />
          <img src={`${path}vinamilk.png`} />
          <img src={`${path}samsung.png`} />
        </div>
      </div>
      <div className="contact">
        <div className="customer-contact-title">
          Quý khách đang cần giải pháp kho ? HÃY LIÊN HỆ PROSST
          <br />
          Hotline: 0938 489 568
        </div>
        <div className="contact-button">
          <a href="#">
            <button>Liên hệ PROSST</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Customer;
