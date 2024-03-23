import { postsApi } from "../api";
import { useEffect, useState } from "react";

export default function Root() {
  const [postsInfo, setPostsInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await postsApi();
        posts.forEach(async (post) => {
          const imgUrl = post._links["wp:attachment"][0].href;
          const imgResponse = await fetch(imgUrl);
          let imgPath = await imgResponse.json();
          imgPath = imgPath[0].source_url;
          setPostsInfo((prevPost) => {
            const found = prevPost.find((element) => element.id === post.id);
            if (found !== undefined) return [...prevPost];
            console.log(imgPath);
            return [
              ...prevPost,
              { id: post.id, title: post.title.rendered, path: imgPath },
            ];
          });
        });
      } catch (err) {
        alert("Error loading posts");
      }
    })();
  }, []);
  const postItems = postsInfo.map((post) => (
    <li key={post.id}>
      <p>{post.title}</p>
      <img src={post.path} style={{ width: "200px" }}></img>
    </li>
  ));
  return (
    <>
      <h1>Root</h1>
      <ul>{postItems}</ul>
    </>
  );
}
