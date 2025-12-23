import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import IconSpritePreview from "@/app/images/zero-icon-sprite-preview.jpg"
import zeroPreview from "@/app/images/react-zero-ui-preview.jpg"
import vetsChoiceInsurancePreview from "@/images/vets-choice-insurance-preview.webp"
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
    id: "react-zero-ui",
    src: zeroPreview,
    alt: "React-Zero-UI - Preview",
    color: "#3B06D1",
    type: "Zero Re-Render State Library",
    text: "View on GitHub",
    href: externalLinks.zeroCore,
    dataText: "View on GitHub",
    ariaLabel: "View React Zero UI on GitHub",
    isExternal: true,
  },
  {
    id: "bespoke",
    src: bespokePreview,
    alt: "Bespoke Preview",
    color: "#024EFC",
    type: "Automotive Styling Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.bespoke,
    dataText: "See Case Study",
    ariaLabel: "See Bespoke Website Build Case Study",
    isExternal: false,
  },
  {
    id: "vets-choice",
    src: vetsChoiceInsurancePreview,
    alt: "Vets Choice Insurance Preview",
    color: "#DA961AA5",
    type: "Pet Insurance Website",
    text: "View Website",
    href: externalLinks.vetsChoice,
    dataText: "View Website",
    ariaLabel: "View Vets Choice Insurance Website",
    isExternal: true,
  },
  {
    id: "zero-icon-sprite",
    src: IconSpritePreview,
    alt: "Zero-Icon-Sprite Preview",
    color: "#3B06D1A5",
    type: "SVG Build Tool",
    text: "View on GitHub",
    href: externalLinks.zeroIconSprite,
    dataText: "View on GitHub",
    ariaLabel: "View React Zero UI Icon Sprite on GitHub",
    isExternal: true,
  },

  {
    id: "automedics",
    src: automedicsPreview,
    alt: "Automedics Preview",
    color: "#000000",
    type: "Automotive Repair Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.automedics,
    dataText: "See Case Study",
    ariaLabel: "See Automedics Website Build Case Study",
    isExternal: false,
  },

  {
    id: "iron-oak",
    src: iaoPreview,
    alt: "IAO Preview",
    color: "#13739C",
    type: "Private Security Website",
    text: "See Case Study",
    href: SITE_SLUGS.projectLinks.iao,
    dataText: "See Case Study",
    ariaLabel: "See Iron & Oak Website Build Case Study",
    isExternal: false,
  },
  {
    id: "entitled",
    src: entitledPreview,
    alt: "Entitled Preview",
    color: "#DA961AA5",
    type: "Event Management Web App",
    text: "View Website",
    href: externalLinks.entitled,
    dataText: "View Website",
    ariaLabel: "View Entitled Website",
    isExternal: true,
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
