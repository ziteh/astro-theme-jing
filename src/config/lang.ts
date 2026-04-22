/**
 * I18n language and locale configuration.
 */

interface langPack {
  /**
   * BCP 47 language tag, https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag
   */
  lang: string;

  /**
   * Open Graph locale tag (language_TERRITORY), https://ogp.me/#optional
   */
  langOg: string;

  /**
   *  IANA time zone, https://timeapi.io/documentation/iana-timezones
   */
  timeZone: string;
  posts: {
    title: string;
    desc: string;
  };
  tags: {
    title: string;
    desc: string;
    pageTitle: (name: string) => string;
  };
  categories: {
    title: string;
    desc: string;
    pageTitle: (name: string) => string;
  };
  search: {
    title: string;
    desc: string;
  };
  about: {
    title: string;
    desc: string;
  };
  archives: {
    title: string;
    desc: string;
    total: (count: number) => string;
  };
  notFound: {
    title: string;
    desc: string;
  };
  common: {
    backToTop: string;
    viewAllPosts: string;
    rssFeed: string;
    featuredPost: string;
    recentPost: string;
    skipToMain: string;
  };
  pagination: {
    next: string;
    prev: string;
  };
  date: {
    monthDay: (date: Date) => string;
    shortFormat: (date: Date) => string;
    longFormat: (date: Date) => string;
    postedOn: (date: string) => string;
  };
}

// You can create your own language pack by modifying the `myLang` object
const myLang: langPack = (() => {
  const lang = "en"; // BCP 47 language tag
  const langOg = "en_US"; // Open Graph locale tag
  const timeZone = "America/New_York"; // IANA time zone

  return {
    lang,
    langOg,
    timeZone,
    posts: {
      title: "Posts",
      desc: "All posts",
    },
    tags: {
      title: "Tags",
      desc: "All tags",
      pageTitle(name: string): string {
        return `Tag: ${name}`;
      },
    },
    categories: {
      title: "Categories",
      desc: "All categories",
      pageTitle(name: string): string {
        return `Category: ${name}`;
      },
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
        return date.toLocaleDateString(lang, {
          month: "short",
          day: "numeric",
          timeZone,
        });
      },
      shortFormat(date: Date): string {
        return date.toLocaleDateString(lang, {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone,
        });
      },
      longFormat(date: Date): string {
        return date.toLocaleDateString(lang, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone,
        });
      },
      postedOn(date: string): string {
        return `Posted on ${date}`;
      },
    },
  };
})();

/*
const myLangExample: langPack = (() => {
  const lang = "zh-TW";
  const timeZone = "Asia/Taipei";
  return {
    lang,
    langOg: "zh_TW",
    timeZone,
    posts: {
      title: "文章",
      desc: "所有文章",
    },
    tags: {
      title: "標籤",
      desc: "所有標籤",
      pageTitle(name: string): string {
        return `標籤：${name}`;
      },
    },
    categories: {
      title: "分類",
      desc: "所有分類",
      pageTitle(name: string): string {
        return `分類：${name}`;
      },
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
        return date.toLocaleDateString(lang, {
          month: "short",
          day: "numeric",
          timeZone,
        });
      },
      shortFormat(date: Date): string {
        return date.toLocaleDateString(lang, {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone,
        });
      },
      longFormat(date: Date): string {
        return date.toLocaleDateString(lang, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone,
        });
      },
      postedOn(date: string): string {
        return `發佈於${date}`;
      },
    },
  };
})();
*/

export const _t: langPack = myLang;
