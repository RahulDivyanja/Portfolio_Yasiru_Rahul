import { H1, Typography } from "@/app/ui/Elements"
import Link from "next/link"
import { Icon } from "../Icon"
import { ProjectHeroProps } from "@/app/data/project-data"
import { AnimatedElement } from "../ui/AnimatedElement"
import { MotionDiv } from "@/app/utils/lazy-ui"

export const ProjectHero: React.FC<ProjectHeroProps> = ({ title, client, year, description, categories, link }) => {
  return (
    <section className="inside-container-large relative z-2 flex max-w-2xl flex-col gap-8">
      <AnimatedElement element="div" fadeDirection="left" offsetPx={30} delay={0}>
        <H1 variant="medium" className="wrap-break-word dark:text-slate-100">
          {title}
        </H1>
      </AnimatedElement>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <Typography as="div" size="xs" className="flex gap-4 text-sm">
          <div className="flex gap-2">
            <span className="dark:text-slate-400">Client</span>
            <span className="font-medium text-black dark:text-slate-100">{client}</span>
          </div>
          <div className="flex gap-2">
            <span className="dark:text-slate-400">Year</span>
            <span className="font-medium text-black dark:text-slate-100">{year}</span>
          </div>
        </Typography>
      </MotionDiv>

      <AnimatedElement element="div" fadeDirection="bottom" offsetPx={20} delay={0.4}>
        <Typography as="p" size="sm" className="leading-normal! text-black dark:text-slate-300">
          {description}
        </Typography>
      </AnimatedElement>

      <MotionDiv
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <Typography as="div" size="xs" className="flex flex-col gap-2 leading-normal! text-black dark:text-slate-300">
          <p className="font-medium">Scope of Work</p>
          <ul className="flex flex-wrap gap-2 text-xs font-medium text-slate-800">
            {categories.map((item, index) => (
              <MotionDiv
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                <li className="z-0 w-fit rounded-full border border-gray-200 bg-white px-4 py-1.5 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
                  {item}
                </li>
              </MotionDiv>
            ))}
          </ul>
        </Typography>
      </MotionDiv>

      <AnimatedElement
        element="div"
        fadeDirection="bottom"
        offsetPx={15}
        delay={0.8}
      >
        <Link
          href={link}
          title={`View ${client} live site`}
          target="_blank"
          className="underline-hover flex w-fit items-center gap-1 text-lg text-nowrap text-black dark:text-slate-100"
        >
          View Live Site
          <Icon name="arrow-right" className="h-3 w-3" />
        </Link>
      </AnimatedElement>
    </section>
  )
}
