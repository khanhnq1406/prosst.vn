import { getCategoryId, postsApi, categoryApi } from "../api";
import { useEffect, useState } from "react";
import Footer from "../../../prosst-react/src/components/footer";
let path = "/wp-content/reactpress/apps/products/dist/";
if (process.env.NODE_ENV === "development") path = "/";

export default function Root() {
  const [postsInfo, setPostsInfo] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await getCategoryList();
    })();
  }, []);

  const getPosts = async (category) => {
    try {
      setLoaded(false);
      setPostsInfo([]);
      const posts = await postsApi();
      const categoryId = category.id;
      setCurrentCategory(category.name);

      for (let post of posts) {
        if (post.categories[0] !== categoryId) continue;
        const content = post.content.rendered;
        const startDescription =
          content.search("main image") + "main image".length;
        const endDescription = content.search("/main image");
        const imageBlock = content.slice(startDescription, endDescription);
        let imgPath = imageBlock.match(/src="(.*?)"/)[1];
        setPostsInfo((prevPost) => {
          const found = prevPost.find((element) => element.id === post.id); // Prevent duplicates
          if (found !== undefined) return [...prevPost];
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
        <a href={`/san-pham/#/${post.id}`}>
          <div className="product-detail">
            <img src={`${path}tap.png`}></img>
          </div>
        </a>
        <img src={post.path} />
        <p>{post.title}</p>
        <a href={`/san-pham/#/${post.id}`}>
          <button>Xem chi tiết</button>
        </a>
      </div>
    </li>
  ));
  const categoryItems = categoryList.map((category) => (
    <li key={category.id}>
      <button className="navigate-link" onClick={(e) => getPosts(category)}>
        {category.name}
      </button>
      <br />
    </li>
  ));
  const getCategoryList = async () => {
    const response = await categoryApi();
    setCategoryList(response);
    getPosts(response[0]);
    setCurrentCategory(response[0].name);
  };
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
      <div className="product-wrapper">
        <div className="categories">
          <p> Danh mục sản phẩm</p>
          {categoryItems}
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
      <div className="footer-custom">
        <Footer />
      </div>
    </div>
  );
}
