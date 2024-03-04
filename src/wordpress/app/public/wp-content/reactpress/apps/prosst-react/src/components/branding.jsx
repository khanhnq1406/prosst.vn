import { useState, useEffect } from "react";
let path = "/wp-content/reactpress/apps/prosst-react/public/";
if (process.env.NODE_ENV === "development") path = "/";
const Branding = () => {
  //   const currentPartnerPosition = 200;
  const [currentPartnerPosition, setCurrentPartnerPosition] = useState(0);
  useEffect(() => {
    console.log(currentPartnerPosition);
    const interval = setInterval(() => {
      setCurrentPartnerPosition((prevPostion) =>
        prevPostion === 1000 ? 0 : prevPostion + 10
      );
    }, 100);
    return () => clearInterval(interval);
  }, [currentPartnerPosition]);
  return (
    <>
      <div className="branding-wrapper">
        <div className="branding-title">
          <p>Các thương hiệu chúng tôi từng hợp tác</p>
        </div>
        <div className="partner">
          <div className="partner-title">PARTNER</div>
          <div class="slider-branding">
            <div class="slide-track">
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/abb.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/siemens.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/mitsu.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img
                  style={{ width: "80%" }}
                  src={`${path}cooperation/partner/hoplong.png`}
                  alt=""
                />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/idea.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img
                  style={{ width: "80%" }}
                  src={`${path}cooperation/partner/pepperl.png`}
                  alt=""
                />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/keyence.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/leadshine.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/abb.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/siemens.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/mitsu.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img
                  style={{ width: "80%" }}
                  src={`${path}cooperation/partner/hoplong.png`}
                  alt=""
                />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/idea.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/pepperl.png`} alt="" />
              </div>
              <div class="slide-branding">
                <img
                  style={{ width: "80%" }}
                  src={`${path}cooperation/partner/keyence.png`}
                  alt=""
                />
              </div>
              <div class="slide-branding">
                <img src={`${path}cooperation/partner/leadshine.png`} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="customer">
          <div className="partner-title">CUSTOMER</div>
          <div class="slider-branding-customer">
            <div class="slide-track-customer">
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/kinhdo.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/ajinomoto.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/samsung.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/vinamilk.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/danon.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/dhl.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/elovi.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/pousung.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/linfox.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/kinhdo.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/ajinomoto.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/samsung.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/vinamilk.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/danon.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/dhl.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/elovi.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/pousung.png`} alt="" />
              </div>
              <div class="slide-branding-customer">
                <img src={`${path}cooperation/customer/linfox.png`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
