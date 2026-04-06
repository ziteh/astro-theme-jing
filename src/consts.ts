export const SITE = {
  title: "Astro Jing",
  description: "An Astro theme for blogging.",
  author: "Your Name", // 君の名は ~

  lang: "en", // BCP 47 language tag
  langOg: "en_US", // Open Graph locale tag, format language_TERRITORY (see https://ogp.me/#optional)
  timezone: "UTC", // IANA time zone name (see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

  postsPerHomepage: 3,
  postsPerArchives: 10,
  postsPerPage: 5,

  getDescriptionCount: 150, // If 'more' tag is not found, use this count of characters
  getDescriptionMaxLines: 10, // Max number of lines to process
} as const;
