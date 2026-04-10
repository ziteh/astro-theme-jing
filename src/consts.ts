export const SITE = {
  title: "Astro Jing",
  description: "An Astro theme for blogging.",
  author: "Your Name", // 君の名は ~

  lang: "en", // BCP 47 language tag
  langOg: "en_US", // Open Graph locale tag, format language_TERRITORY (see https://ogp.me/#optional)
  timeZone: "America/New_York", // IANA time zone name (https://timeapi.io/documentation/iana-timezones)

  postsPerHomepage: 3,
  postsPerArchives: 10,
  postsPerPage: 5,

  getDescriptionCount: 150, // If 'more' tag is not found, use this count of characters
  getDescriptionMaxLines: 10, // Max number of lines to process

  // Default values for frontmatter fields
  defaultFmTag: "Others",
  defaultFmCategory: undefined,
  defaultFmToc: false,
  defaultFmComments: false,
  defaultFmMath: false,
} as const;
