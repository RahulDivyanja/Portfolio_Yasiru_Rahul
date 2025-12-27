import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"
import { DATA } from "../data/resume"

const getIconForSkill = (skill: string) => {
  const lowercaseSkill = skill.toLowerCase()
  
  if (lowercaseSkill.includes("react")) return "react"
  if (lowercaseSkill.includes("next")) return "next"
  if (lowercaseSkill.includes("type")) return "typescript"
  if (lowercaseSkill.includes("python")) return "python"
  if (lowercaseSkill.includes("express")) return "express"
  if (lowercaseSkill.includes("mongo")) return "mongodb"
  if (lowercaseSkill.includes("postgres") || lowercaseSkill.includes("sql")) return "postgresql"
  if (lowercaseSkill.includes("figma")) return "figma"
  if (lowercaseSkill.includes("motion")) return "motion"
  if (lowercaseSkill.includes("openai") || lowercaseSkill.includes("ai")) return "openai"
  if (lowercaseSkill.includes("git")) return "github"
  if (lowercaseSkill.includes("node")) return "boxes" // Fallback for Node
  if (lowercaseSkill.includes("tailwind")) return "paint-bucket"
  if (lowercaseSkill.includes("web")) return "web"
  return "check"
}

const tech = DATA.skills.map(skill => ({
  name: skill,
  src: getIconForSkill(skill)
}))

const services = [
  { name: "Full Stack Development", src: "magic-wand" },
  { name: "React Development", src: "paint-bucket" },
  { name: "Performance Optimization", src: "web" },
  { name: "Code Reviews", src: "planet" },
  { name: "Advanced Motion", src: "cube" },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}
export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-16 max-md:w-full md:flex-[2_0_0px]">
        <AnimatedH2>
          <span className="text-slate-500 dark:text-slate-400">Tech</span> <br />
          Stack
        </AnimatedH2>

        {/* Tech Stack */}
        <div className="w-full">
          <Text size="base" className="mb-8">
            My tech stack
          </Text>

          <MotionUl
            className="grid grid-cols-5 gap-8 max-[420px]:justify-items-center md:justify-items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {tech.map(({ name, src }) => (
              <MotionLi key={name} variants={element}>
                <div className="group relative">
                  <input placeholder={name} type="checkbox" className="peer hidden" id={name} />

                  <label
                    htmlFor={name}
                    className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5 dark:bg-slate-800 dark:border-gray-700"
                  >
                    <Icon name={src} width={30} height={30} className="h-7 w-7 text-black dark:text-white" />
                  </label>
                  {/* optional tooltip */}
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-black px-2 py-1 text-xs text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100">
                    {name}
                  </span>
                </div>
              </MotionLi>
            ))}
          </MotionUl>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid flex-[1_0_0px] grid-cols-2 gap-8 md:grid-cols-1"
      >
        {services.map(({ name, src }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-slate-700">
              <Icon name={src} width={25} height={30} className="h-6 w-6 text-black dark:text-white" />
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}
