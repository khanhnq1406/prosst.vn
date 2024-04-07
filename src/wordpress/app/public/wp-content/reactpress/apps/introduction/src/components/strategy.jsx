import { useEffect, useRef } from "react";
let path = "/wp-content/reactpress/apps/introduction/dist/";
if (process.env.NODE_ENV === "development") path = "/";
const Strategy = () => {
  const contentRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var rect = contentRef.current.getBoundingClientRect();
      if (rect.top < 350) {
        contentRef.current.classList.add("is-animated");
        visionRef.current.classList.add("is-animated");
        missionRef.current.classList.add("is-animated");
        contentRef.current.addEventListener("animationend", function () {
          contentRef.current.classList.remove("is-animated");
          visionRef.current.classList.remove("is-animated");
          missionRef.current.classList.remove("is-animated");
        });
      }
    });
  }, []);
  return (
    <div className="strategy-wrapper">
      <div ref={contentRef} className="strategy-card vision">
        <div className="strategy-icon">
          <img src={`${path}vision.png`} />
        </div>
        <div className="strategy-title">TẦM NHÌN</div>
        <div className="strategy-content">
          “Trở thành nhà cung cấp giải pháp toàn diện cho các giải pháp công
          nghiệp đặc biệt là Kho. Đóng góp vào sự phát triển của nền kinh tế -
          xã hội đất nước”
        </div>
      </div>

      <div ref={missionRef} className="strategy-card mission">
        <div className="strategy-icon">
          <img src={`${path}mission.png`} />
        </div>
        <div className="strategy-title">SỨ MỆNH</div>
        <div className="strategy-content">
          Chúng tôi, công ty giải pháp về kho, cam kết xây dựng một tương lai
          phát triển bền vững cho doanh nghiệp bạn, giúp tăng cường hiệu xuất
          hoạt động và giảm thiểu chi phí
        </div>
      </div>

      <div ref={visionRef} className="strategy-card values">
        <div className="strategy-icon">
          <img src={`${path}values.png`} />
        </div>
        <div className="strategy-title">GIÁ TRỊ</div>
        <div className="strategy-content">
          <ul>
            <li>Sáng tạo và đổi mới</li>
            <li>Tận tâm phục vụ khách hàng</li>
            <li>Cam kết chất lượng</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
