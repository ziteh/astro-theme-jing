import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
];

for (const { name, path } of pages) {
  test(`${name} (${path}) should have no a11y violations`, async ({ page }) => {
    await page.goto(path);
    const res = await new AxeBuilder({ page }).analyze();
    expect(res.violations).toEqual([]);
  });
}
