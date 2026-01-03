export const DOMAIN_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

// normalize base URL (remove trailing slash) to avoid double-slashes when concatenating paths
export const BASE_URL = DOMAIN_URL.endsWith("/") ? DOMAIN_URL.slice(0, -1) : DOMAIN_URL

export const SITE_CONFIG = {
  title: "Yasiru Rahul - Full Stack Developer Portfolio | MERN & React Native",
  description: "Portfolio of Yasiru Rahul, an aspiring Full Stack Developer & BICT (Hons) Undergraduate specializing in MERN Stack and React Native.",
  url: BASE_URL,
  siteName: "Yasiru Rahul",
  keywords: ["Yasiru Rahul", "Full Stack Developer", "MERN Stack", "React Native", "Sri Lanka", "Web Developer"],
  ogImage: "/profile v4.png",
  icons: {
    icon: "/profile v4.png", 
    shortcut: "/profile v4.png",
    apple: "/profile v4.png", 
  },
  logo: "/profile v4.png",
} as const

export const SITE_NAP = {
  name: "Yasiru Rahul",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Yasiru Rahul",
  contactTitle: "Full Stack Developer",
  email: "rahuldivyanja@gmail.com",
  phone: "+94770127459",
  formattedPhone: "+94 77 012 7459",
  addressLink: "",
  street: "",
  city: "Colombo",
  zipCode: "",
  openingHours: [{ days: "Mon - Fri", hours: "9am - 5pm" }] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "",
    linkedIn: "https://linkedin.com/in/rahuldivyanja",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/rahuldivyanja",
    x: "",
  } as const,
  logo: "/profile v4.png",
  favicon: "/favicon.ico",
  images: ["/profile v.png"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-austin-serb",
  projectLinks: {
    skAutoCare: "/projects/sk-auto-care",
    travelCeylon: "/projects/travel-ceylon",
    heartAttackDetector: "/projects/heart-attack-detector",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
