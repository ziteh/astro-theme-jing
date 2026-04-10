export const SITE = {
  // Basic information
  title: "Astro Jing", // Your blog title
  description: "An Astro theme for blogging.", // Your blog description
  author: "Your Name", // 君の名は ~

  // Localization
  lang: "en", // BCP 47 language tag
  langOg: "en_US", // Open Graph locale tag, format language_TERRITORY (see https://ogp.me/#optional)
  timeZone: "America/New_York", // IANA time zone name (https://timeapi.io/documentation/iana-timezones)

  // Pagination
  postsPerHomepage: 3,
  postsPerArchives: 10,
  postsPerAllPosts: 5,

  // Description generation
  getDescriptionCount: 150, // If 'more' tag is not found, use this count of characters
  getDescriptionMaxLines: 10, // Max number of lines to process

  // Default values for frontmatter fields
  defaultFmTag: "Others", // String or undefined
  defaultFmCategory: undefined, // String or undefined
  defaultFmToc: false,
  defaultFmComments: false,
  defaultFmMath: false,
} as const;
