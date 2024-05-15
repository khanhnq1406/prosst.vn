import { useState, useEffect } from "react";
import { getLatestPost } from "../../../products/src/api";
let path = "/wp-content/reactpress/apps/prosst-react/dist/";
if (process.env.NODE_ENV === "development") path = "/";
getLatestPost;
const Outstanding = () => {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    (async () => {
      const posts = await getLatestPost(3);
      for (const post of posts) {
        // Find main product image
        const content = post.content.rendered;
        const startMainImgBlock =
          content.search("main image") + "main image".length;
        const endMainImgBlock = content.search("/main image");
        const mainImgBlock = content.slice(startMainImgBlock, endMainImgBlock);
        let imgPath = mainImgBlock.match(/src="(.*?)"/)[1];
        setProductInfo((prevProduct) => {
          const found = prevProduct.find((element) => element.id === post.id); // Prevent duplicates
          if (found !== undefined) return [...prevProduct];
          return [
            ...prevProduct,
            { id: post.id, title: post.title.rendered, path: imgPath },
          ];
        });
      }
    })();
  }, []);
  const productItems = productInfo.map((product) => (
    <li key={product.id}>
      <div className="outstanding-card-wrapper">
        <div className="outstanding-card">
          <a href={`/san-pham/#/${product.id}`}>
            <div className="product-detail">
              <img src={`${path}tap.png`}></img>
            </div>
          </a>
          <div className="outstanding-card-icon">
            <img src={product.path} />
          </div>
          <div className="outstanding-card-title">{product.title}</div>
          <div className="outstanding-button">
            <a href={`/san-pham/#/${product.id}`}>
              <button>Xem chi tiết</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="outstanding-wrapper">
      <div className="outstanding-title">SẢN PHẨM NỔI BẬT</div>
      <div className="outstanding-content">
        Top 3 sản phẩm nổi bật tại PROSST
      </div>
      <ul>{productItems}</ul>
    </div>
  );
};

export default Outstanding;
