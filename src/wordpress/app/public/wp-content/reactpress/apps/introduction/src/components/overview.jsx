let path = "/wp-content/reactpress/apps/introduction/dist/";
if (process.env.NODE_ENV === "development") path = "/";

const Overview = () => {
  return (
    <div
      className="overview-wrapper"
      style={{ backgroundImage: `${path}black-bg.png` }}
    >
      <div className="bg-image">
        <img src={`${path}black-bg.png`} alt="" />
      </div>
      <div className="navbar">
        <div className="logo">
          <img src={`${path}logo.png`} />
        </div>
        <div className="navigate-wrapper">
          <div className="navigate-link">
            <a href="/">Trang chủ</a>
          </div>
          <div className="navigate-link active">
            <a href="/gioi-thieu">Giới thiệu</a>
          </div>
          <div className="navigate-link">
            <a href="/san-pham">Sản phẩm</a>
          </div>
          <div className="navigate-link">
            <a href="/du-an">Dự án</a>
          </div>
          <div className="navigate-link">
            <a href="/lien-he">Liên hệ</a>
          </div>
        </div>
      </div>
      <div className="overview-title">Giới thiệu về PROSST</div>
      <div className="overview-content">
        Nơi bạn có thể tìm kiếm mọi sản phẩm liên quan đến <br /> giải pháp
        warehouse, robot, computer vision.
      </div>
      <div className="overview-img">
        <img
          className="img-horizontal overview-1"
          src={`${path}overview-1.png`}
        />
        <img className="img-vertical" src={`${path}overview-2.png`} />
        <img className="img-square" src={`${path}overview-3.png`} />
        <img className="img-vertical" src={`${path}overview-4.png`} />
        <img
          className="img-horizontal overview-5"
          src={`${path}overview-5.png`}
        />
      </div>
    </div>
  );
};
export default Overview;
