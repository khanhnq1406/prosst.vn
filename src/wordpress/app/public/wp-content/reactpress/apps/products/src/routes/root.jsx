import { getCategoryId, postsApi } from "../api";
import { useEffect, useState } from "react";

let path = "/wp-content/reactpress/apps/products/public/";
if (process.env.NODE_ENV === "development") path = "/";

export default function Root() {
  const [postsInfo, setPostsInfo] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    getPosts("banh-rang");
    setCurrentCategory("Bánh răng");
  }, []);

  const getPosts = async (slug) => {
    try {
      setLoaded(false);
      setPostsInfo([]);
      const posts = await postsApi();
      const category = await getCategoryId(slug);
      const categoryId = category.id;
      setCurrentCategory(category.name);

      for (let post of posts) {
        if (post.categories[0] !== categoryId) continue;
        const imgUrl = post._links["wp:attachment"][0].href;
        const imgResponse = await fetch(imgUrl);
        let imgPath = await imgResponse.json();
        console.log(post, imgPath);
        imgPath = imgPath[0].source_url;
        setPostsInfo((prevPost) => {
          const found = prevPost.find((element) => element.id === post.id);
          if (found !== undefined) return [...prevPost];
          console.log(post);
          return [
            ...prevPost,
            { id: post.id, title: post.title.rendered, path: imgPath },
          ];
        });
      }
      setLoaded(true);
    } catch (err) {
      console.log(err);
      alert("Error loading posts");
    }
  };
  const postItems = postsInfo.map((post) => (
    <li key={post.id}>
      <div className="product-card">
        <img src={post.path} />
        <p>{post.title}</p>
        <a href="#">
          <button>Liên hệ</button>
        </a>
      </div>
    </li>
  ));
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={`${path}logo.png`} />
        </div>
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
            <a href="#">Liên hệ</a>
          </div>
        </div>
      </div>
      <hr className="break-line" />
      <div className="product-wrapper">
        <div className="categories">
          <p> Danh mục sản phẩm</p>
          <button
            className="navigate-link"
            onClick={(e) => getPosts("banh-rang")}
          >
            Bánh răng
          </button>
          <br />
          <button
            className="navigate-link"
            onClick={(e) => getPosts("xich-tai")}
          >
            Xích tải
          </button>
        </div>
        <div className="product-list">
          <p>{currentCategory}</p>
          {hasLoaded ? (
            <ul>{postItems}</ul>
          ) : (
            <img src={`${path}loading.gif`} style={{ width: "200px" }}></img>
          )}
        </div>
      </div>
    </div>
  );
}
