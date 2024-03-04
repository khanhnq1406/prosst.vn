import { useState, useEffect } from "react";
let path = "/wp-content/reactpress/apps/prosst-react/public/";
if (process.env.NODE_ENV === "development") path = "/";

const Product = () => {
  const numberOfProduct = 5; // Number of products to show on the page
  const numberOfProject = 5; // Number of projects to show on the page
  const [isAutoSlidingProduct, setAutoSlidingProduct] = useState(true);
  const [isAutoSlidingProject, setAutoSlidingProject] = useState(true);
  const [currentSlideProduct, setCurrentSlideProduct] = useState(0);
  const [currentSlideProject, setCurrentSlideProject] = useState(0);

  useEffect(() => {
    if (isAutoSlidingProduct) {
      const interval = setInterval(() => {
        setCurrentSlideProduct((prevSlide) =>
          prevSlide === numberOfProduct ? 0 : prevSlide + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoSlidingProduct]); // Run only once on component mount

  useEffect(() => {
    if (isAutoSlidingProject) {
      const interval = setInterval(() => {
        setCurrentSlideProject((prevSlide) =>
          prevSlide === numberOfProject ? 0 : prevSlide + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoSlidingProject]); // Run only once on component mount

  useEffect(() => {
    if (!isAutoSlidingProduct) {
      const interval = setInterval(() => {
        setAutoSlidingProduct(true);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoSlidingProduct]); // Run only once on component mount

  useEffect(() => {
    if (!isAutoSlidingProject) {
      const interval = setInterval(() => {
        setAutoSlidingProject(true);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoSlidingProject]); // Run only once on component mount

  const ctrlBtnHandle = (direction) => {
    setAutoSlidingProduct(false);
    if (direction === "next")
      setCurrentSlideProduct((prevSlide) =>
        prevSlide === numberOfProduct ? numberOfProduct : prevSlide + 1
      );
    else if (direction === "prev")
      setCurrentSlideProduct((prevSlide) =>
        prevSlide === 0 ? 0 : prevSlide - 1
      );
  };

  const ctrlBtnHandleProject = (direction) => {
    setAutoSlidingProject(false);
    if (direction === "next")
      setCurrentSlideProject((prevSlide) =>
        prevSlide === numberOfProject ? numberOfProject : prevSlide + 1
      );
    else if (direction === "prev")
      setCurrentSlideProject((prevSlide) =>
        prevSlide === 0 ? 0 : prevSlide - 1
      );
  };
  return (
    <>
      <div className="product-wrapper">
        <div className="product-title">
          <p className="product-content">SẢN PHẨM</p>
        </div>
        <div class="slider" id="slider">
          <div
            class="slide"
            id="slide"
            style={{ left: `${currentSlideProduct * -257}px` }}
          >
            <div className="img-wrapper">
              <a href="#">
                <img class="item" src={`${path}example-product.png`} />
                <div className="info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </a>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="ctrl-btn pro-prev"
          onClick={(e) => ctrlBtnHandle("prev")}
        >
          <img src={`${path}next.png`} />
        </button>
        <button
          class="ctrl-btn pro-next"
          onClick={(e) => ctrlBtnHandle("next")}
        >
          <img src={`${path}next.png`} />
        </button>
        <div className="product-title">
          <p className="product-content">DỰ ÁN</p>
        </div>
        <div class="slider" id="slider">
          <div
            class="slide"
            id="slide"
            style={{ left: `${currentSlideProject * -257}px` }}
          >
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="img-wrapper">
              <img class="item" src={`${path}example-product.png`} />
              <div className="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="ctrl-btn-second pro-prev-second"
          onClick={(e) => ctrlBtnHandleProject("prev")}
        >
          <img src={`${path}next.png`} />
        </button>
        <button
          class="ctrl-btn-second pro-next-second"
          onClick={(e) => ctrlBtnHandleProject("next")}
        >
          <img src={`${path}next.png`} />
        </button>
      </div>
    </>
  );
};

export default Product;
