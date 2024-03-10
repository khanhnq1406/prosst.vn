import { useRef, useEffect } from "react";

let path = "/wp-content/reactpress/apps/introduction/public/";
if (process.env.NODE_ENV === "development") path = "/";
const Industry = () => {
  const contentRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var rect = contentRef.current.getBoundingClientRect();
      if (rect.top < 500) {
        contentRef.current.classList.add("is-animated");
        contentRef.current.addEventListener("animationend", function () {
          console.log("removed");
          contentRef.current.classList.remove("is-animated");
          imgRef.current.classList.add("is-animated");
        });
      }
    });
  }, []);
  return (
    <div className="industry-wrapper">
      <div className="grid-container">
        <div className="grid-content">
          <div ref={contentRef} className="industry-content">
            <div className="industry-title">
              Công ty TNHH Kỹ thuật và
              <br />
              Giải pháp lưu trữ PRO
              <hr className="break-line" />
            </div>
            <div className="industry-paragraph">
              PROSST là một trong những công ty hàng đầu Việt Nam trong lĩnh vực
              cung cấp giải pháp nhà kho, vật tư cho các hệ thống kệ tĩnh, bán
              tự động và tự động. Các sản phẩm PROSST cung cấp có xuất xứ từ
              Nhật, Đức, Châu Âu, Châu Mỹ,...
              <br /> <br />
              Với đội ngũ kỹ sư nhiều năm kinh nghiệm, PROSST đã và đang khẳng
              định vị thế của mình với các giải pháp được tối ưu hóa, mang đến
              khách hàng sự hài lòng trong quá trình vận hành.
              <br /> <br />
              Bên cạnh đó những dòng sản phẩm đạt chất lượng quốc tế, đáp ứng
              yêu cầu ngày càng khắc khe của ngành công nghiệp Logictics, được
              các 3PL, các nhà máy và các đơn vị tư vấn thiết kế đánh giá cao.
            </div>
          </div>
        </div>
        <div ref={imgRef} className="grid-image">
          <div className="card-wrapper">
            <div className="card warehouse">
              <div className="card-title">
                GIẢI PHÁP NHÀ KHO
                <br />
                THÔNG MINH
              </div>
              <div className="card-image">
                <img src={`${path}card-warehouse.png`} />
              </div>
              <div className="card-button">
                <a href="#">
                  <img src={`${path}next.png`} />
                </a>
              </div>
            </div>
            <div className="card image-processing">
              <div className="card-title">
                GIẢI PHÁP XỬ LÝ ẢNH
                <br />
                CÔNG NGHIỆP
              </div>
              <div className="card-image">
                <img src={`${path}card-img-processing.png`} />
              </div>
              <div className="card-button">
                <a href="#">
                  <img src={`${path}next.png`} />
                </a>
              </div>
            </div>
            <div className="card maintain">
              <div className="card-title">
                DỊCH VỤ BẢO TRÌ
                <br />
                TỰ ĐỘNG HÓA
              </div>
              <div className="card-image">
                <img src={`${path}card-maintain.png`} />
              </div>
              <div className="card-button">
                <a href="#">
                  <img src={`${path}next.png`} />
                </a>
              </div>
            </div>
            <div className="card supply">
              <div className="card-title">
                CUNG CẤP PHỤ TÙNG -
                <br />
                THIẾT BỊ TỰ ĐỘNG HÓA
              </div>
              <div className="card-image">
                <img src={`${path}card-supply.png`} />
              </div>
              <div className="card-button">
                <a href="#">
                  <img src={`${path}next.png`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
