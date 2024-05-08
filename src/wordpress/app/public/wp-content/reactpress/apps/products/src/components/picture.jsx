import { useEffect, useState } from "react";

let path = "/wp-content/reactpress/apps/products/dist/";
if (process.env.NODE_ENV === "development") path = "/";

const Picture = (props) => {
  const [mainImg, setmainImg] = useState("");
  const product = props.product;
  const content = product.content.rendered;
  // Find main product image
  const startMainImgBlock =
    content.search("&lt;main image>") + "&lt;main image>".length;
  const endMainImgBlock = content.search("&lt;/main image>");
  const mainImgBlock = content.slice(startMainImgBlock, endMainImgBlock);
  let mainImgSrc = mainImgBlock.match(/src="(.*?)"/)[1];
  useEffect(() => {
    if (!mainImgSrc) return;
    setmainImg(mainImgSrc);
  }, [mainImgSrc]);

  // Find more product images
  const startMoreImgBlock =
    content.search("&lt;more images>") + "&lt;more images>".length;
  const endMoreImgBlock = content.search("&lt;/more images>");
  const moreImgBlock = content.slice(startMoreImgBlock, endMoreImgBlock);
  const moreImgSrc = [...moreImgBlock.matchAll(`src="`)];
  const imgPaths = [mainImgSrc];
  for (const img of moreImgSrc) {
    const startImgSrc = img.index + img[0].length;
    const endImgSrc = moreImgBlock.indexOf(`"`, startImgSrc);
    imgPaths.push(moreImgBlock.slice(startImgSrc, endImgSrc));
  }
  const handleChangeMainPicture = (e, index) => {
    e.preventDefault();
    setmainImg(imgPaths[index]);
  };
  const productPictures = imgPaths.map((imgPath, index) => (
    <a onClick={(e) => handleChangeMainPicture(e, index)}>
      <img src={imgPath}></img>
    </a>
  ));

  // Find manual file
  const startFileBlock = content.search("&lt;catalog>") + "&lt;catalog>".length;
  const endFileBlock = content.search("&lt;/catalog>");
  const fileBlock = content.slice(startFileBlock, endFileBlock);

  let fileLink = undefined;
  try {
    fileLink = fileBlock.match(/href="(.*?)"/)[1];
  } catch (error) {}

  function changeImageHandle(e, direction) {
    e.preventDefault();
    const index = imgPaths.indexOf(mainImg);
    if (direction === "next") {
      setmainImg(imgPaths[(index + 1) % imgPaths.length]);
    } else if (direction === "prev") {
      setmainImg(imgPaths[index - 1 > -1 ? index - 1 : imgPaths.length - 1]);
    }
  }
  return (
    <div className="container">
      <div className="navbar">
        <a href="/">
          <div className="logo">
            <img src={`${path}logo.png`} />
          </div>
        </a>
        <div className="navigate-wrapper">
          <div className="navigate-link">
            <a href="/">Trang chủ</a>
          </div>
          <div className="navigate-link">
            <a href="/gioi-thieu">Giới thiệu</a>
          </div>
          <div className="navigate-link active">
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
      <hr className="break-line" />
      <div className="product-pictures-wrapper">
        <div className="product-pictures">
          <div className="main-picture">
            <div className="image-wrapper">
              <div className="prev-picture">
                <button onClick={(e) => changeImageHandle(e, "prev")}>
                  <img src={`${path}arrow-up.png`} />
                </button>
              </div>
              <img src={mainImg}></img>
              <div className="next-picture">
                <button onClick={(e) => changeImageHandle(e, "next")}>
                  <img src={`${path}arrow-up.png`} />
                </button>
              </div>
            </div>
            <div className="name-button">
              <div className="product-name">{props.product.title.rendered}</div>
              <a href="/lien-he">
                <button>Liên hệ tư vấn</button>
              </a>
              {fileLink ? (
                <a href={fileLink}>
                  <button>Tải xuống</button>
                </a>
              ) : null}
            </div>
          </div>
          <div className="more-pictures">{productPictures}</div>
        </div>
      </div>
    </div>
  );
};
export default Picture;
