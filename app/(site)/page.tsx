import dynamic from "next/dynamic"
import { HeroV2 } from "../components/HeroV2"
// Dynamic imports for below-the-fold content
const ProjectsSection = dynamic(() => import("../components/ProjectsSection").then((mod) => mod.ProjectsSection))
const AboutSectionV2 = dynamic(() => import("../components/AboutSectionV2").then((mod) => mod.AboutSectionV2))
const ServicesSectionV2 = dynamic(() => import("../components/ServicesSectionV2").then((mod) => mod.ServicesSectionV2))
const RecruiterContact = dynamic(() => import("../components/RecruiterContact").then((mod) => mod.RecruiterContact))
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"
import Script from "next/script"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Explore the Full-Stack developer portfolio of Yasiru Rahul, a full-stack engineer building fast, modern web applications. See what a professional coding portfolio looks like, featuring projects in React, Next.js, and the custom-built React-Zero-UI library.",

  keywords: [
    "Yasiru Rahul",
    "Full-Stack Portfolio",
    "Full-Stack Developer",
    "Mern Stack",
    "Next.js",
    "React",
    "software engineer developer",
    "Full-Stack Engineer",
    "React Developer Portfolio",
  ],
  authors: [{ name: "Yasiru Rahul" }],
  creator: "Yasiru Rahul",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Script
        id="id-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />
      <HeroV2 />
      <div className="border-b border-gray-200 dark:border-white/5" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
