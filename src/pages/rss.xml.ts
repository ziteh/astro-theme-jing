import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE } from "@/consts";
import getBlogPosts from "@/utils/getPosts";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("Site URL is not defined.");
  }

  const posts = await getBlogPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}`,
    })),
  });
};
