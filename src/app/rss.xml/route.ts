import { Feed } from "feed";
import { getAllPosts } from "@/lib/posts";

const SITE_URL = "https://david-blog.dev";

export async function GET() {
  const posts = getAllPosts();

  const feed = new Feed({
    title: "David's Blog",
    description: "Writing about web development, TypeScript, and software engineering.",
    id: SITE_URL,
    link: SITE_URL,
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    author: {
      name: "David",
      link: SITE_URL,
    },
  });

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/posts/${post.slug}`,
      link: `${SITE_URL}/posts/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
