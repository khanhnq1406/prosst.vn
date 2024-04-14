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
        const imgUrl = post._links["wp:attachment"][0].href;
        const imgResponse = await fetch(imgUrl);
        let imgPath = await imgResponse.json();
        imgPath = imgPath[0].source_url;
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
          <div className="outstanding-card-icon">
            <img src={product.path} />
          </div>
          <div className="outstanding-card-title">{product.title}</div>
          <div className="outstanding-button">
            <a href="/lien-he">
              <button>Liên hệ</button>
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
