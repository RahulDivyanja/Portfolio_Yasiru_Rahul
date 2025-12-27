export const DOMAIN_URL = "https://github.com/rahuldivyanja"

export const SITE_CONFIG = {
  title: "Yasiru Rahul - Full Stack Developer Portfolio | MERN & React Native",
  description: "Portfolio of Yasiru Rahul, an aspiring Full Stack Developer & BICT (Hons) Undergraduate specializing in MERN Stack and React Native.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Yasiru Rahul",
  keywords: ["Yasiru Rahul", "Full Stack Developer", "MERN Stack", "React Native", "Sri Lanka", "Web Developer"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
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
