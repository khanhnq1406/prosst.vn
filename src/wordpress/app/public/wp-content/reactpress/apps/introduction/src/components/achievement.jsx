import { useEffect, useRef } from "react";
const Achievement = () => {
  const customerRef = useRef(null);
  const projectRef = useRef(null);
  const productRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var rect = customerRef.current.getBoundingClientRect();
      console.log(rect.top);
      if (rect.top < 500) {
        customerRef.current.classList.add("is-animated");
        projectRef.current.classList.add("is-animated");
        productRef.current.classList.add("is-animated");
        customerRef.current.addEventListener("animationend", function () {
          customerRef.current.classList.remove("is-animated");
          projectRef.current.classList.remove("is-animated");
          productRef.current.classList.remove("is-animated");
        });
      }
    });
  }, []);
  return (
    <div className="achievement-wrapper">
      <div className="achievement-title">
        <div className="title-1">Thống kê kết quả hoạt động</div>
        <div className="title-2">Những thành tựu chúng tôi đạt được</div>
      </div>
      <div className="achievements-list">
        <div className="achivement-customer">
          <div ref={customerRef} className="number"></div>
          <div className="title">Khách hàng tin cậy</div>
        </div>
        <div className="achivement-project">
          <div ref={projectRef} className="number"></div>
          <div className="title">Dự án thành công</div>
        </div>
        <div className="achivement-product">
          <div ref={productRef} className="number"></div>
          <div className="title">Sản phẩm tự động hóa</div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
