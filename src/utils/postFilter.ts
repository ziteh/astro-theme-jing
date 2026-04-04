import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const isPublished = data.date <= new Date();
  if (!isPublished) {
    return false;
  }

  const isDraft = data.draft === true;
  if (isDraft) {
    return false;
  }

  return true;
};

export default postFilter;
