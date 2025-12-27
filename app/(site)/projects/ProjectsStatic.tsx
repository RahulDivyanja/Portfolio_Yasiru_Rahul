import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import zeroPreview from "@/app/images/react-zero-ui-preview.png"
import travelCeylonPreview from "@/app/images/Travel Ceylon.png"
import heartAttackDetectorPreview from "@/app/images/HeartAttack detector.png"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "sk-auto-care",
    src: zeroPreview, // Using zeroPreview as a placeholder or if it matches SK Auto Care in resume, wait, resume used reactZeroUIPreview for SK Auto Care
    alt: "SK Auto Care Preview",
    color: "#3B06D1",
    type: "E-commerce Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.skAutoCare,
    dataText: "See Case Study",
    ariaLabel: "See SK Auto Care Case Study",
    isExternal: false,
  },
  {
    id: "travel-ceylon",
    src: travelCeylonPreview,
    alt: "Travel Ceylon Preview",
    color: "#024EFC",
    type: "Travel Booking Platform",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.travelCeylon,
    dataText: "See Case Study",
    ariaLabel: "See Travel Ceylon Case Study",
    isExternal: false,
  },
  {
    id: "heart-attack-detector",
    src: heartAttackDetectorPreview,
    alt: "Heart Attack Detector Preview",
    color: "#DA961A",
    type: "IoT Health App",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.heartAttackDetector,
    dataText: "See Case Study",
    ariaLabel: "See Heart Attack Detector Case Study",
    isExternal: false,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                href: project.href,
                target: "_blank",
                rel: "noopener",
                "data-text": project.dataText,
                "aria-label": project.ariaLabel,
              }
              : {
                href: project.href,
                "data-text": project.dataText,
                "aria-label": project.ariaLabel,
                prefetch: true,
              }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
