const en = {
  posts: {
    title: "Posts",
    desc: "All posts",
  },
  tags: {
    title: "Tags",
    desc: "All tags",
  },
  categories: {
    title: "Categories",
    desc: "All categories",
  },
  search: {
    title: "Search",
    desc: "Search posts",
  },
  about: {
    title: "About",
    desc: "About me",
  },
  notFound: {
    title: "Page Not Found",
    desc: "The page you are looking for does not exist.",
  },
  common: {
    backToTop: "Back to top",
    viewAllPosts: "View all posts",
    rssFeed: "Subscribe to RSS feed",
    lastUpdatedOn: "Last updated on",
  },
  pagination: {
    next: "Next",
    prev: "Prev",
  },
  date: {
    shortFormat(date: Date): string {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    longFormat(date: Date): string {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};

// biome-ignore lint/correctness/noUnusedVariables: for example
const zhHant: typeof en = {
  posts: {
    title: "文章",
    desc: "所有文章",
  },
  tags: {
    title: "標籤",
    desc: "所有標籤",
  },
  categories: {
    title: "分類",
    desc: "所有分類",
  },
  search: {
    title: "搜尋",
    desc: "搜尋文章",
  },
  about: {
    title: "關於",
    desc: "關於我",
  },
  notFound: {
    title: "找不到頁面",
    desc: "您正在尋找的頁面不存在。",
  },
  common: {
    backToTop: "回到頂部",
    viewAllPosts: "所有文章",
    rssFeed: "訂閱 RSS",
    lastUpdatedOn: "最後更新於",
  },
  pagination: {
    next: "下一頁",
    prev: "上一頁",
  },
  date: {
    shortFormat(date: Date): string {
      return date.toLocaleDateString("zh-Hant", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    longFormat(date: Date): string {
      return date.toLocaleDateString("zh-Hant", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};

// Select the language
export const _t: typeof en = en;
