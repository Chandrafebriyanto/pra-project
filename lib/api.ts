import { Post } from "@/type/post";

export async function getLastPost(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const posts = await res.json();
  return posts;
}

export async function getDetailPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await res.json();
  return post;
}

export async function getAllPost(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts as Post[];
}
