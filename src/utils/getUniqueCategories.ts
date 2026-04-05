import type { CollectionEntry } from "astro:content";
import postFilter from "@/utils/postFilter";
import { slugifyStr } from "@/utils/slugify";

interface Category {
  id: string;
  name: string;
  count: number;
}

const getUniqueCategories = (posts: CollectionEntry<"blog">[]): Category[] => {
  const categoryMap = new Map<string, Category>();

  posts
    .filter(postFilter)
    .flatMap((post) => post.data.categories)
    .forEach((category) => {
      const id = slugifyStr(category);
      if (categoryMap.has(id)) {
        // Existing
        const existingCategory = categoryMap.get(id)!;
        existingCategory.count += 1;
      } else {
        // New
        categoryMap.set(id, {
          id,
          name: category,
          count: 1,
        });
      }
    });

  // Sort by name
  const categories = Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  return categories;
};

export default getUniqueCategories;
