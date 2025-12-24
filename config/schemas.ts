import { ProjectData } from "@/app/data/project-data"
import { DOMAIN_URL, SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"
import type { Graph, ItemList } from "schema-dts"
interface ProjectItem {
  name: string
  url: string // your case-study URL (internal) OR absolute external URL
  date: string
  description: string
  external?: string // when you host the case study, put the client URL here
  type?: "SoftwareSourceCode" | "SoftwareApplication" | "WebSite" | "WebApplication" | "CreativeWork"
}

// Project data for schema
const projectsData: ProjectItem[] = [
  {
    name: "SK Auto Care",
    url: SITE_SLUGS.projectLinks.skAutoCare,
    date: "2025-09-01",
    description: "E-commerce Website",
    type: "WebSite",
  },
  {
    name: "Travel Ceylon",
    url: SITE_SLUGS.projectLinks.travelCeylon,
    date: "2025-05-01",
    description: "Travel Booking Platform",
    type: "WebSite",
  },
  {
    name: "Heart Attack Detector",
    url: SITE_SLUGS.projectLinks.heartAttackDetector,
    date: "2025-01-01",
    description: "IoT Health App",
    type: "SoftwareApplication",
  },
]

const SITE = DOMAIN_URL.replace(/\/$/, "")

const imgSrc = (x?: { src?: string } | string) => (typeof x === "string" ? x : x?.src)

export function buildProjectGraphMinimal(slug: string, pd: ProjectData, type = "CreativeWork" as const): Graph {
  const id = `${SITE}${SITE_SLUGS.projects}/${slug}`
  const title = typeof pd.hero.title === "string" ? pd.hero.title : "Case Study"
  const description = typeof pd.hero.description === "string" ? pd.hero.description : undefined
  const image = imgSrc(pd.beforeAfter?.heroAfter) || imgSrc(pd.beforeAfter?.heroBefore)

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": id,
        url: id,
        name: title,
        ...(description ? { description } : {}),
        ...(image ? { image } : {}),
        ...(pd.hero.link ? { sameAs: [pd.hero.link] } : {}),
        mainEntityOfPage: id,
        isPartOf: { "@id": `${SITE}${SITE_SLUGS.projects}#page` },
        author: { "@id": `${SITE}/#austin-serb` },
        publisher: { "@id": `${SITE}#org` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE}${SITE_SLUGS.projects}` },
          { "@type": "ListItem", position: 3, name: title, item: id },
        ],
      },
    ],
  }
}

const itemList: ItemList = {
  "@type": "ItemList",
  "@id": `${SITE}${SITE_SLUGS.projects}#list`,
  itemListOrder: "Descending",
  numberOfItems: projectsData.length,
  itemListElement: projectsData.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@id": (p.url || "").startsWith("/") ? `${SITE}${p.url}` : p.url },
  })),
}

// 2) Include the ItemList node inside @graph, then reference it from CollectionPage.mainEntity
export const projectsGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    itemList,
    {
      "@type": "CollectionPage",
      "@id": `${SITE}${SITE_SLUGS.projects}#page`,
      url: `${SITE}${SITE_SLUGS.projects}`,
      name: "Projects - Austin Serb",
      isPartOf: { "@id": `${SITE}#website` },
      mainEntity: { "@id": `${SITE}${SITE_SLUGS.projects}#list` }, // <-- REFERENCES ABOVE
      mainEntityOfPage: `${SITE}${SITE_SLUGS.projects}`,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE}${SITE_SLUGS.projects}` },
      ],
    },
  ],
}

export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}#home`,
      url: SITE,
      name: SITE_CONFIG.title,
      isPartOf: { "@id": `${SITE}#website` },
      mainEntityOfPage: SITE,
      mainEntity: {
        "@type": "ItemList",
        name: "Featured projects",
        itemListElement: projectsData.slice(0, 4).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url }, // reference-only
        })),
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }],
    },
  ],
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}#org`,
      name: "Serbyte Development",
      url: SITE,
      logo: { "@id": `${SITE}#logo` },
      sameAs: Object.values(SITE_NAP.profiles),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Hiring",
          email: `mailto:${SITE_NAP.email}`,
          areaServed: "US",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#austin-serb`,
      name: "Austin Serb",
      url: SITE,
      jobTitle: "Full-Stack Engineer",
      image: { "@id": `${SITE}#headshot` },
      worksFor: { "@id": `${SITE}#org` },
      sameAs: Object.values(SITE_NAP.profiles),
      email: SITE_NAP.email,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}#website`,
      url: SITE,
      name: "Austin Serb - Developer Portfolio",
      publisher: { "@id": `${SITE}#org` },
      inLanguage: "en",
    },
    { "@type": "ImageObject", "@id": `${SITE}#headshot`, url: `${SITE}/profile.webp` },
    { "@type": "ImageObject", "@id": `${SITE}#logo`, url: `${SITE}/serbyte-logo.png` },
  ],
}
