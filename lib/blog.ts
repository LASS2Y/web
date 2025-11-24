"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage(props: BlogPostPageProps) {
  const id = Number((await props.params).id);
  const post = await getPost(id);
}

type Post = {
  id: number;
  title: string;
  creator: string;
  content: string;
};

let posts: Post[] = [];
let nextId = 1;

export async function getPosts() {
  return posts;
}

export async function getPost(id: number) {
  return posts.find((p) => p.id === id);
}

export async function createPost(form: FormData) {
  const title = form.get("title")?.toString() || "";
  const creator = form.get("creator")?.toString() || "";
  const content = form.get("content")?.toString() || "";

  posts.push({
    id: nextId++,
    title,
    creator,
    content,
  });

  redirect("/posts"); // redirige après création
}

export async function editPost(form: FormData) {
  const id = Number(form.get("id"));
  const title = form.get("title")?.toString() || "";
  const creator = form.get("creator")?.toString() || "";
  const content = form.get("content")?.toString() || "";

  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) throw new Error("Post not found");

  posts[index] = {
    ...posts[index],
    title,
    creator,
    content,
  };

  redirect(`/posts/${id}`); // redirige vers le post modifié
}

export async function deletePost(id: number) {
  posts = posts.filter((p) => p.id !== id);
  redirect("/posts");
}
