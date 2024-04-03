let path = "/wp-content/reactpress/apps/prosst-react/dist/";
if (process.env.NODE_ENV === "development") path = "/";
const Outstanding = () => {
  return (
    <div className="outstanding-wrapper">
      <div className="outstanding-title">SẢN PHẨM NỔI BẬT</div>
      <div className="outstanding-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
        augue bibendum nunc vestibulum egestas. Vestibulum sit amet mauris sed
        sem venenatis vestibulum{" "}
      </div>
      <div className="outstanding-card-wrapper">
        <div className="outstanding-card">
          <div className="outstanding-card-icon">
            <img src={`${path}product-example.png`} />
          </div>
          <div className="outstanding-card-title">Sản phẩm 1</div>
          <div className="outstanding-button">
            <a href="#">
              <button>Liên hệ</button>
            </a>
          </div>
        </div>

        <div className="outstanding-card">
          <div className="outstanding-card-icon">
            <img src={`${path}product-example.png`} />
          </div>
          <div className="outstanding-card-title">Sản phẩm 2</div>
          <div className="outstanding-button">
            <a href="#">
              <button>Liên hệ</button>
            </a>
          </div>
        </div>

        <div className="outstanding-card">
          <div className="outstanding-card-icon">
            <img src={`${path}product-example.png`} />
          </div>
          <div className="outstanding-card-title">Sản phẩm 3</div>
          <div className="outstanding-button">
            <a href="#">
              <button>Liên hệ</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outstanding;
