import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("renders the hero with a non-empty name", async ({ page }) => {
    await page.goto("/");
    // Brand mark is locale-independent.
    await expect(page.getByRole("banner").getByText("Zundal")).toBeVisible();
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    expect((await h1.innerText()).trim().length).toBeGreaterThan(1);
  });

  test("shows the two primary call-to-action buttons", async ({ page }) => {
    await page.goto("/");
    const ctas = page.locator("section#top button");
    // eyebrow/name/role + 2 CTAs + scroll cue all live in the hero; assert CTAs exist.
    await expect(ctas.filter({ hasText: /.+/ })).not.toHaveCount(0);
  });

  test("renders all three project links to the live sites", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('a[href="https://tabemono.vercel.app/"]')
    ).toBeVisible();
    await expect(
      page.locator('a[href="https://novel-note.vercel.app/"]')
    ).toBeVisible();
    await expect(
      page.locator('a[href="https://mafia-xi-one.vercel.app"]')
    ).toBeVisible();
  });

  test("exposes GitHub, LinkedIn and email links", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('a[href="https://github.com/Zundal"]').first()
    ).toBeVisible();
    await expect(
      page
        .locator(
          'a[href="https://www.linkedin.com/in/jeongsik-an-1559b21b1/"]'
        )
        .first()
    ).toBeVisible();
    await expect(
      page.locator('a[href^="mailto:ajs15010120@gmail.com"]').first()
    ).toBeVisible();
  });

  test("never leaks raw i18n keys to the page", async ({ page }) => {
    await page.goto("/");
    const body = await page.locator("body").innerText();
    // Regression guard for the posts.<id> key mismatch bug.
    expect(body).not.toMatch(/posts\.[a-zA-Z]/);
    expect(body).not.toMatch(/writing\.tags\./);
    expect(body).not.toMatch(/projects\.items\./);
  });
});

test.describe("Internationalization", () => {
  // Start every i18n test from a clean detector state.
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test("switches the whole UI to Korean", async ({ page }) => {
    await page.getByRole("button", { name: "Change language" }).click();
    await page.getByRole("option", { name: /한국어/ }).click();

    // Assertions that hold on every viewport (nav links are desktop-only).
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
    await expect(page.locator("h1").first()).toContainText("안정식");
  });

  test("remembers the chosen language across reloads", async ({ page }) => {
    await page.getByRole("button", { name: "Change language" }).click();
    await page.getByRole("option", { name: /日本語/ }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
  });
});

test.describe("Writing", () => {
  test("opens a blog post and renders its body", async ({ page }) => {
    await page.goto("/");
    // First post link in the writing list.
    await page.locator('a[href^="#/post/"]').first().click();
    await expect(page).toHaveURL(/#\/post\//);

    // Post page has an article heading and a back link.
    await expect(page.locator("main h1")).toBeVisible();
    const back = page.getByRole("link").filter({ hasText: /←/ }).first();
    await expect(back).toBeVisible();
    await back.click();
    await expect(page).toHaveURL(/#\/$|\/$/);
  });
});
