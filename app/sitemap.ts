import { SITE_SLUGS, DOMAIN_URL } from "@/config/siteConfig"
import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const flatSlugs = Object.values(SITE_SLUGS).flatMap((val) => 
    (typeof val === "string" ? [val] : Object.values(val))
  )

  // FILTER UPDATE: Exclude hash links AND external links (http/https)
  const allRoutes = flatSlugs.filter((route) => 
    typeof route === "string" && 
    !route.includes("#") && 
    !route.startsWith("http") // <--- THIS LINE FIXES THE ERROR
  )

  // Safety check: remove trailing slash if it exists
  const baseUrl = DOMAIN_URL.endsWith('/') 
    ? DOMAIN_URL.slice(0, -1) 
    : DOMAIN_URL

  const routes = allRoutes.map((route) => {
    // Ensure route starts with / if it's internal
    const path = route.startsWith('/') ? route : `/${route}`
    
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      priority: path === "/" ? 1.0 : 0.8,
      changeFrequency: path === "/" ? "daily" : "weekly",
    }
  }) as MetadataRoute.Sitemap

  // Ensure homepage is included
  const hasHomepage = routes.some(r => r.url === baseUrl || r.url === `${baseUrl}/`)
  if (!hasHomepage) {
    routes.unshift({
      url: baseUrl,
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFrequency: "daily",
    })
  }

  return routes
}