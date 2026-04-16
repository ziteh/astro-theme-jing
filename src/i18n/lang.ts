import { SITE } from "@/consts";

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
  archives: {
    title: "Archives",
    desc: "All posts",
    total(count: number): string {
      if (count === 0) return "No posts yet";
      if (count === 1) return "Total 1 post";
      return `Total ${count} posts`;
    },
  },
  notFound: {
    title: "Page Not Found",
    desc: "The page you are looking for does not exist.",
  },
  common: {
    backToTop: "Back to top",
    viewAllPosts: "View all posts",
    rssFeed: "Subscribe to RSS feed",
    featuredPost: "Featured",
    recentPost: "Recent",
    skipToMain: "Skip to main content",
  },
  pagination: {
    next: "Next",
    prev: "Prev",
  },
  date: {
    monthDay(date: Date): string {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        timeZone: SITE.timeZone,
      });
    },
    shortFormat(date: Date): string {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: SITE.timeZone,
      });
    },
    longFormat(date: Date): string {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: SITE.timeZone,
      });
    },
    postedOn(date: string): string {
      return `Posted on ${date}`;
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
  archives: {
    title: "封存",
    desc: "所有文章",
    total(count: number): string {
      if (count === 0) return "目前沒有文章";
      return `總共 ${count} 篇文章`;
    },
  },
  notFound: {
    title: "找不到頁面",
    desc: "您正在尋找的頁面不存在。",
  },
  common: {
    backToTop: "回到頂部",
    viewAllPosts: "所有文章",
    rssFeed: "訂閱 RSS",
    featuredPost: "精選",
    recentPost: "最新",
    skipToMain: "跳到主要內容",
  },
  pagination: {
    next: "下一頁",
    prev: "上一頁",
  },
  date: {
    monthDay(date: Date): string {
      return date.toLocaleDateString("zh-Hant", {
        month: "short",
        day: "numeric",
        timeZone: SITE.timeZone,
      });
    },
    shortFormat(date: Date): string {
      return date.toLocaleDateString("zh-Hant", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: SITE.timeZone,
      });
    },
    longFormat(date: Date): string {
      return date.toLocaleDateString("zh-Hant", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: SITE.timeZone,
      });
    },
    postedOn(date: string): string {
      return `發佈於${date}`;
    },
  },
};

// Select the language
export const _t: typeof en = en;
