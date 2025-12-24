import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { projectsGraph } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Yasiru Rahul Divyanja - Projects & Case Studies",
  description:
    "Featured work by Yasiru Rahul Divyanja: Full-Stack MERN applications, Next.js + Tailwind CSS e-commerce platforms, and freelance web solutions. Explore scope, code, and outcomes.",
  keywords: [
    "Yasiru Rahul Divyanja",
    "Yasiaru Rahul",
    "SK Auto Care",
    "Software engineering",
    "Projects",
    "Case Studies",
    "MERN Stack",
    "Next.js",
    "Tailwind CSS",
    "Full-Stack Developer",
    "University of Sri Jayewardenepura",
    "Rahul Divyanja",
    "Sri Lanka",
  ],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsGraph),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
