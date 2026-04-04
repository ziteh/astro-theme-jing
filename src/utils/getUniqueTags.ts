import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import { slugifyStr } from "./slugify";

interface Tag {
  id: string;
  name: string;
  count: number;
}

const getUniqueTags = (posts: CollectionEntry<"blog">[]): Tag[] => {
  const tagMap = new Map<string, Tag>();

  posts
    .filter(postFilter)
    .flatMap((post) => post.data.tags)
    .forEach((tag) => {
      const id = slugifyStr(tag);
      if (tagMap.has(id)) {
        // Existing
        const existingTag = tagMap.get(id)!;
        existingTag.count += 1;
      } else {
        // New
        tagMap.set(id, {
          id,
          name: tag,
          count: 1,
        });
      }
    });

  // Sort by name
  const tags = Array.from(tagMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  return tags;
};

export default getUniqueTags;
