import sitemap from "@/app/sitemap"
import { DOMAIN_URL, SITE_SLUGS } from "@/config/siteConfig"
import { test, expect } from "@playwright/test"

test("sitemap() generates valid sitemap entries", async () => {
  const routes = await sitemap()

  expect(Array.isArray(routes)).toBeTruthy()

  const urls = routes.map((r) => r.url)

  // homepage present
  expect(urls.some((u) => u === DOMAIN_URL || u === `${DOMAIN_URL}/`)).toBeTruthy()

  // no hash fragments and all URLs start with DOMAIN_URL
  for (const u of urls) {
    expect(u.includes("#")).toBeFalsy()
    expect(u.startsWith(DOMAIN_URL)).toBeTruthy()
  }

  // homepage priority and changeFrequency
  const homepage = routes.find((r) => r.url === DOMAIN_URL || r.url === `${DOMAIN_URL}/`)
  expect(homepage).toBeDefined()
  if (homepage) {
    expect(homepage.priority).toBe(1.0)
    expect(homepage.changeFrequency).toBe("daily")
  }

  // ensure all expected internal slugs are included (excluding hashes and external links)
  const flatSlugs = Object.values(SITE_SLUGS).flatMap((v) => (typeof v === "string" ? [v] : Object.values(v)))
  const expectedPaths = flatSlugs
    .filter((s) => typeof s === "string" && !s.includes("#") && !s.startsWith("http"))
    .map((s) => (s.startsWith("/") ? `${DOMAIN_URL}${s}` : `${DOMAIN_URL}/${s}`))

  for (const expected of expectedPaths) {
    expect(urls).toContain(expected)
  }
})
