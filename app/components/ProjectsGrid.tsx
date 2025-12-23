"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import reactZeroUIPreview from "@/app/images/react-zero-ui-preview.jpg"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
// import { externalLinks } from "@/config/siteConfig"

import { DATA } from "@/app/data/resume"

// Generate IDs based on project titles
const ids = DATA.projects.map((p) => p.title.toLowerCase().replace(/\s+/g, "-"))

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  // Simplified tuning generation
  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {}
  ids.forEach((id, i) => {
    // Logic from original code spread out to dynamic items
    // "react-zero-ui": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    // "iron-and-oak": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    // "automedics": { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    // "bespoke": { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },

    // We cycle through similar values to maintain the aesthetic
    const rotations = [9, -5, 5, 12];
    const dxs = [-30, -60, -45, -50];
    const mobileDxs = [-220, -230, -225, -230];
    const dys = [-40, -40, -25, -10];
    const mobileDys = [-120, -130, -130, -110];

    OFFSET_TUNING[id] = {
      rot: rotations[i % 4],
      s: responsiveScale,
      dx: isMobile ? mobileDxs[i % 4] : dxs[i % 4],
      dy: isMobile ? mobileDys[i % 4] : dys[i % 4]
    }
  })

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]

      if (!base) {
        return [id, { x: 0, y: 0, rot: 0, s: 1 }]
      }

      return [
        id,
        {
          x: base.x! + t.dx!,
          y: base.y! + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        {DATA.projects.map((project, i) => {
          const id = ids[i]
          return (
            <AnimatedCard
              key={id}
              src={project.image || reactZeroUIPreview} // Fallback to a default image if empty
              alt={project.title}
              offset={offsets[id]}
              gridId={id}
              color={project.color || "#000000"}
              type={project.technologies[0] || "Project"}
              progress={progress}
              href={project.href || "#"}
              dataText="View Project"
            />
          )
        })}
      </div>
    </section>
  )
}
