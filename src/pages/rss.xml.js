import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE } from "../consts";
import postFilter from "../utils/postFilter";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.filter(postFilter).map((post) => ({
      ...post.data,
      link: `/posts/${post.id}/`,
    })),
  });
}
