import { useEffect, useState } from "react";
const WPURL = "http://localhost:10004/wp-json/wp/v2/posts";
export async function postsApi() {
  try {
    const response = await fetch(WPURL);
    if (!response.ok) {
      // oups! something went wrong
      return;
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
