import rss from "@astrojs/rss";
import { SITE } from "@/consts";
import getBlogPosts from "@/utils/getPosts";

export async function GET(context) {
  const posts = await getBlogPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.id}/`,
    })),
  });
}
