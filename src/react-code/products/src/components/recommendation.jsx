import { useEffect, useState } from "react";
import { getProductInCategory } from "../api";

const Recommendation = (props) => {
  const [products, setProducts] = useState([]);
  const categoryId = props.product.categories[0];
  useEffect(() => {
    (async () => {
      const productList = await getProductInCategory(categoryId);
      for (const product of productList) {
        // if (product.id === props.product.id) continue;
        const content = product.content.rendered;
        const startDescription =
          content.search("main image") + "main image".length;
        const endDescription = content.search("/main image");
        const imageBlock = content.slice(startDescription, endDescription);
        let imgSrc = imageBlock.match(/src="(.*?)"/)[1];
        setProducts((prev) => {
          const found = prev.find((element) => element.id === product.id); // Prevent duplicates
          if (found !== undefined) return [...prev];
          return [
            ...prev,
            { id: product.id, title: product.title.rendered, path: imgSrc },
          ];
        });
      }
    })();
  }, []);
  const productItems = products.map((product) => (
    <li key={product.id}>
      <div className="product-card">
        <img src={product.path} />
        <p>{product.title}</p>
        <a href={`/san-pham/#/${product.id}`}>
          <button>Xem chi tiết</button>
        </a>
      </div>
    </li>
  ));
  return (
    <div className="container">
      <div className="product-recommendation">
        <div className="recommendation-title">Sản phẩm tương tự</div>
        <ul>{productItems}</ul>
      </div>
    </div>
  );
};

export default Recommendation;
