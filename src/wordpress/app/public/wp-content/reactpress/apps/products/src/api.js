import { useEffect, useState } from "react";
const WPURL = "http://localhost:10004/wp-json/wp/v2";
export async function postsApi() {
  const url = `${WPURL}/posts`;
  try {
    const response = await fetch(url);
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

export async function getCategoryId(slug) {
  const url = `${WPURL}/categories`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // oups! something went wrong
      return;
    }
    const responseJson = await response.json();
    let categories = { id: "", name: "" };
    for (let category of responseJson) {
      if (slug === category.slug) {
        categories.id = category.id;
        categories.name = category.name;
        break;
      }
    }
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}
