import { getCategoryId, postsApi } from "../api";
import { useEffect, useState } from "react";

export default function Root() {
  const [postsInfo, setPostsInfo] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const posts = await postsApi();
  //       const categorieId = await getCategoryId("banh-rang");
  //       for (let post of posts) {
  //         if (post.categories[0] !== categorieId) continue;
  //         const imgUrl = post._links["wp:attachment"][0].href;
  //         const imgResponse = await fetch(imgUrl);
  //         let imgPath = await imgResponse.json();
  //         imgPath = imgPath[0].source_url;
  //         console.log(post.categories[0] !== categorieId);
  //         setPostsInfo((prevPost) => {
  //           const found = prevPost.find((element) => element.id === post.id);
  //           if (found !== undefined) return [...prevPost];
  //           console.log(post);
  //           return [
  //             ...prevPost,
  //             { id: post.id, title: post.title.rendered, path: imgPath },
  //           ];
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       alert("Error loading posts");
  //     }
  //   })();
  // }, []);

  const getPosts = async (slug) => {
    try {
      setPostsInfo([]);
      const posts = await postsApi();
      const categorieId = await getCategoryId(slug);
      for (let post of posts) {
        if (post.categories[0] !== categorieId) continue;
        const imgUrl = post._links["wp:attachment"][0].href;
        const imgResponse = await fetch(imgUrl);
        let imgPath = await imgResponse.json();
        imgPath = imgPath[0].source_url;
        console.log(post.categories[0] !== categorieId);
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
    } catch (err) {
      console.log(err);
      alert("Error loading posts");
    }
  };
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
      <button onClick={(e) => getPosts("banh-rang")}>Banh rang</button>
      <button onClick={(e) => getPosts("xich-tai")}>Xich tai</button>
    </>
  );
}
