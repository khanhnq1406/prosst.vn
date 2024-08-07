import { useEffect, useState } from "react";
const WPURL = "https://prosst.vn/wp-json/wp/v2";
export async function postsApi() {
  const url = `${WPURL}/posts/?per_page=100`;
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

export async function categoryApi() {
  const url = `${WPURL}/categories`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // oups! something went wrong
      return;
    }
    const responseJson = await response.json();
    let categories = [];
    for (let category of responseJson) {
      if (category.slug.includes("products")) {
        categories.push({
          id: category.id,
          slug: category.slug,
          name: category.name,
        });
      }
    }
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getLatestPost(numberOfPosts) {
  try {
    const categories = await categoryApi();
    const posts = await postsApi();
    const latestPosts = [];
    for (const post of posts) {
      for (const category of categories) {
        if (post.categories[0] == category.id) {
          latestPosts.push(post);
        }
        if (latestPosts.length >= numberOfPosts) break;
      }
      if (latestPosts.length >= numberOfPosts) break;
    }
    return latestPosts;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
}

export async function getProduct(productId) {
  const url = `${WPURL}/posts/${productId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // oups! something went wrong
      return;
    }
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductInCategory(categoryId) {
  const categoryUrl = `${WPURL}/posts?categories=${categoryId}`;
  try {
    const response = await fetch(categoryUrl);
    if (!response.ok) {
      // oups! something went wrong
      return;
    }
    const productList = await response.json();
    return productList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
