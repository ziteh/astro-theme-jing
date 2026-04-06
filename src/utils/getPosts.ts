import { type CollectionEntry, getCollection } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  // Future posts are not shown
  if (data.date > new Date()) {
    return false;
  }

  // Draft posts are not shown
  if (data.draft) {
    return false;
  }

  return true;
};

const getBlogPosts = async (): Promise<CollectionEntry<"blog">[]> => {
  const posts = await getCollection("blog");
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.updated ?? b.data.date).getTime()) -
        Math.floor(new Date(a.data.updated ?? a.data.date).getTime()),
    );
};

export default getBlogPosts;
