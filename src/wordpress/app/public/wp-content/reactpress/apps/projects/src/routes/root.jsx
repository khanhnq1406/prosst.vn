import Footer from "../../../prosst-react/src/components/footer";
let path = "/wp-content/reactpress/apps/projects/public/";
if (process.env.NODE_ENV === "development") path = "/";
export default function Root() {
  return (
    <div className="container">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${path}construction.png)` }}
      >
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
            <div className="navigate-link active">
              <a href="/du-an">Dự án</a>
            </div>
            <div className="navigate-link">
              <a href="/lien-he">Liên hệ</a>
            </div>
          </div>
        </div>
        <div className="page-title">DỰ ÁN</div>
      </div>

      <div className="project-list">
        <div className="content">
          <img src={`${path}vinamilk.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại nhà máy VINAMILK
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại nhà máy Vinamilk, Bình Dương
          </div>
        </div>

        <div className="content">
          <img src={`${path}linfox.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại kho Linfox-Unilever
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại kho Linfox-Unilever Đồng Nai
          </div>
        </div>

        <div className="content">
          <img src={`${path}Nestle-Bongsen.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại nhà máy Nestle Bông Sen
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại nhà máy Nestle Bông Sen, Hưng Yên
          </div>
        </div>

        <div className="content">
          <img src={`${path}Nestle-Longbinh.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại tổng kho Nestle Long Bình
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại tổng kho Nestle Long Bình, Đồng Nai
          </div>
        </div>

        <div className="content">
          <img src={`${path}fleming.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại nhà máy Fleming
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại nhà máy Fleming, Đồng Nai
          </div>
        </div>

        <div className="content">
          <img src={`${path}Pousung.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại nhà máy Posung
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại nhà máy Posung, Đồng Nai
          </div>
        </div>

        <div className="content">
          <img src={`${path}idea.jpg`} />
          <div className="content-title">
            Dự án lắp đặt robot ABB, đối tác IDEA Group
          </div>
          <div className="content-description">
            Lắp đặt hệ thống robot cùng đối tác IDEA Group, TP Hồ Chí Minh
          </div>
        </div>

        <div className="content">
          <img src={`${path}Saigon-Tantec.jpg`} />
          <div className="content-title">
            Dự án Warehouse tại nhà máy SaiGon TAN TEC
          </div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại nhà máy Saigon TAN TEC, TP.Hồ Chí Minh
          </div>
        </div>

        <div className="content">
          <img src={`${path}ecco.jpg`} />
          <div className="content-title">Dự án Warehouse tại nhà máy ECCO</div>
          <div className="content-description">
            Lắp đặt hệ thống kho tại nhà máy Ecco
          </div>
        </div>
      </div>

      <div className="contact-suggestion">
        <div className="suggestion-title">
          Giải pháp tự động hóa ? Hãy liên hệ PROSST
        </div>
        <a href="/lien-he">
          <button>Liên hệ</button>
        </a>
      </div>
      <div className="footer-custom">
        <Footer />
      </div>
    </div>
  );
}
