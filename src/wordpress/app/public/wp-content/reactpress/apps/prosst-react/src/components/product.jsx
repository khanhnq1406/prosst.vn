import { useState, useEffect } from "react";
let path = "/wp-content/reactpress/apps/prosst-react/dist/";
if (process.env.NODE_ENV === "development") path = "/";

const Product = () => {
  const numberOfProduct = 10; // Number of products to show on the page
  const numberOfProject = 10; // Number of projects to show on the page
  const [isAutoSlidingProduct, setAutoSlidingProduct] = useState(true);
  const [isAutoSlidingProject, setAutoSlidingProject] = useState(true);
  const [currentSlideProduct, setCurrentSlideProduct] = useState(0);
  const [currentSlideProject, setCurrentSlideProject] = useState(0);

  const calculateTranslateXValue = function (numberOfItems) {
    const marginSliderSize = 200;
    const maxWidthOfSlide = 280; //260px + 20px margin (.img-wrapper)
    const sliderVisbleWidth = window.innerWidth - marginSliderSize;
    const sliderItemsLength = maxWidthOfSlide * numberOfItems;
    const visibleSlidePercent = (sliderVisbleWidth * 100) / sliderItemsLength;
    const invisbleSlidePercent = 100 - visibleSlidePercent;

    let numberOfShiftSlides = Math.round(
      (invisbleSlidePercent / 100) * numberOfItems
    );
    if (numberOfShiftSlides === 0 && invisbleSlidePercent > 0)
      numberOfShiftSlides = 1;
    const translateXValueForInvisible =
      invisbleSlidePercent / numberOfShiftSlides;
    return [numberOfShiftSlides, translateXValueForInvisible];
  };

  const [numberOfShiftSlidesProduct, translateXValueForInvisibleProduct] =
    calculateTranslateXValue(numberOfProduct);

  const [numberOfShiftSlidesProject, translateXValueForInvisibleProject] =
    calculateTranslateXValue(numberOfProject);
  useEffect(() => {
    if (isAutoSlidingProduct) {
      const interval = setInterval(() => {
        setCurrentSlideProduct((prevSlide) =>
          prevSlide === numberOfShiftSlidesProduct ? 0 : prevSlide + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoSlidingProduct]); // Run only once on component mount

  useEffect(() => {
    if (isAutoSlidingProject) {
      const interval = setInterval(() => {
        setCurrentSlideProject((prevSlide) =>
          prevSlide === numberOfShiftSlidesProject ? 0 : prevSlide + 1
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
        prevSlide === numberOfShiftSlidesProduct
          ? numberOfShiftSlidesProduct
          : prevSlide + 1
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
        prevSlide === numberOfShiftSlidesProject
          ? numberOfShiftSlidesProject
          : prevSlide + 1
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
            style={{
              transform: `translateX(-${
                translateXValueForInvisibleProduct * currentSlideProduct
              }%)
              `,
            }}
          >
            <div className="img-wrapper">
              <a href="#">
                <img class="item" src={`${path}product-example.png`} />
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
              <img class="item" src={`${path}product-example.png`} />
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
            style={{
              transform: `translateX(-${
                translateXValueForInvisibleProject * currentSlideProject
              }%)
            `,
            }}
          >
            <div className="img-wrapper">
              <iframe
                class="item"
                src="https://www.youtube.com/embed/nTnJvAk3QPY?si=Xfw4WECao1xPu_or"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="info">
                <p>PROSST Shuttle in racking</p>
              </div>
            </div>
            <div className="img-wrapper">
              <iframe
                class="item"
                src="https://www.youtube.com/embed/2FqrclN1fl4?si=WfEoTLYX5LY_BdxR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="info">
                <p>
                  Guiding robot for pick and place application using Vision
                  system
                </p>
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
