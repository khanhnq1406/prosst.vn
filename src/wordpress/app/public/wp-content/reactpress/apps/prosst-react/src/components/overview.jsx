import { useEffect, useState } from "react";

let path = "/wp-content/reactpress/apps/prosst-react/dist/";
if (process.env.NODE_ENV === "development") path = "/";

const Overview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setAutoSliding] = useState(true);
  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoSliding]); // Run only once on component mount

  useEffect(() => {
    if (!isAutoSliding) {
      const interval = setInterval(() => {
        setAutoSliding(true);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoSliding]); // Run only once on component mount

  const handleSlideLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
    setAutoSliding(false);
  };

  const handleSlideRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 3 : prevSlide + 1));
    setAutoSliding(false);
  };

  const handleNumberSlide = (numberOfSlide) => {
    setCurrentSlide(numberOfSlide - 1);
    setAutoSliding(false);
  };
  return (
    <>
      {/* <div className="home">
        <section className="overview"> */}
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={`${path}logo.png`} />
          </div>
          <div className="navigate-wrapper">
            <div className="navigate-link active">
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
            <div className="navigate-link">
              <a href="lien-he">Liên hệ</a>
            </div>
          </div>
        </div>
        <div
          className="content-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="content">
            <div className="black-layout">
              <img className="content-1" src={`${path}overview1-1.png`}></img>
            </div>
            <div className="box-wrapper-landing">
              <div className="overview-title">
                <p>Công ty TNHH Kỹ thuật và Giải pháp lưu trữ PRO</p>
              </div>
              <div className="overview-content">
                <p>
                  NHÀ TÍCH HỢP THIẾT BỊ VÀ <br />
                  GIẢI PHÁP TỰ ĐỘNG HÓA
                </p>
              </div>
              <div className="overview-button">
                <a href="/gioi-thieu">
                  <button>Giới thiệu về PROSST</button>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="black-layout">
              <img className="black-img" src={`${path}overview2.png`}></img>
            </div>
            <div className="box-wrapper">
              <div className="overview-title">WAREHOUSE, LOGISTIC</div>
              <div className="overview-content">
                AGV robot tự hành trong kho, khung kệ, bảng tên, phần mềm quản
                lý kho...
              </div>
              <div className="overview-button">
                <button>XEM THÊM →</button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="black-layout">
              <img src={`${path}overview3.png`}></img>
            </div>
            <div className="box-wrapper" style={{ left: "210%" }}>
              <div className="overview-title">ROBOT</div>
              <div className="overview-content">
                Robot KUKA, Robot ABB và các phụ tùng liên quan...
              </div>
              <div className="overview-button">
                <button>XEM THÊM →</button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="black-layout">
              <img src={`${path}overview4.png`}></img>
            </div>
            <div className="box-wrapper" style={{ left: "310%" }}>
              <div className="overview-title">COMPUTER VISION</div>
              <div className="overview-content">
                Máy tính công nghiệp, camera công nghiệp, thấu kính, đèn công
                nghiệp, đồ gá, phần mềm chuyên dụng cho vision...
              </div>
              <div className="overview-button">
                <button>XEM THÊM →</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="slider-wrapper"> */}
        <div className="button-slide-left">
          <button onClick={handleSlideLeft}>
            <div class="arrow-left">
              <img src={`${path}arrow-up.png`} />
            </div>
          </button>
        </div>
        <div className="button-slide-right">
          <button onClick={handleSlideRight}>
            <div class="arrow-right">
              <img src={`${path}arrow-up.png`} />
            </div>
          </button>
        </div>
        <div className="pagination-wrapper">
          <button
            className={`pagination ${currentSlide === 0 ? "active" : ""}`}
            onClick={(e) => handleNumberSlide(1)}
          ></button>
          <button
            className={`pagination ${currentSlide === 1 ? "active" : ""}`}
            onClick={(e) => handleNumberSlide(2)}
          ></button>
          <button
            className={`pagination ${currentSlide === 2 ? "active" : ""}`}
            onClick={(e) => handleNumberSlide(3)}
          ></button>
          <button
            className={`pagination ${currentSlide === 3 ? "active" : ""}`}
            onClick={(e) => handleNumberSlide(4)}
          ></button>
        </div>
        {/* </div> */}
      </div>
      {/* </section>
      </div> */}
    </>
  );
};

export default Overview;
