import { H1, Typography } from "@/app/ui/Elements"
import Link from "next/link"
import { Icon } from "../Icon"
import { ProjectHeroProps } from "@/app/data/project-data"
import { DATA } from "@/app/data/resume"
import React from "react"
import { AnimatedElement } from "../ui/AnimatedElement"
import { MotionDiv } from "@/app/utils/lazy-ui"

export const ProjectHero: React.FC<ProjectHeroProps & { slug?: string }> = ({ title, client, year, description, categories, link, slug }) => {
  const project = slug ? DATA.projects.find((p) => p.slug === slug) : undefined
  const sourceLink = project?.links?.find((l) => /source|code|git|repo/i.test(l.type))
  return (
    <section className="inside-container-large relative z-2 flex max-w-2xl flex-col gap-8">
      <AnimatedElement element="div" fadeDirection="left" offsetPx={30} delay={0}>
        <H1 variant="medium" className="wrap-break-word heading">
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
            <span className="muted-text">Client</span>
            <span className="font-medium body-text">{client}</span>
          </div>
          <div className="flex gap-2">
            <span className="muted-text">Year</span>
            <span className="font-medium body-text">{year}</span>
          </div>
        </Typography>
      </MotionDiv>

      <AnimatedElement element="div" fadeDirection="bottom" offsetPx={20} delay={0.4}>
        <Typography as="p" size="sm" className="leading-normal! body-text">
          {description}
        </Typography>
      </AnimatedElement>

      <MotionDiv
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        <Typography as="div" size="xs" className="flex flex-col gap-2 leading-normal! body-text">
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
                <li className="z-0 w-fit rounded-full border border-gray-200 bg-white px-4 py-1.5 dark:bg-slate-800 dark:border-slate-700 muted-text">
                  {item}
                </li>
              </MotionDiv>
            ))}
          </ul>
        </Typography>
      </MotionDiv>

      <AnimatedElement element="div" fadeDirection="bottom" offsetPx={15} delay={0.8}>
        <div className="flex items-center gap-4">
          <Link
            href={link}
            title={`View ${client} live site`}
            target="_blank"
            className="underline-hover flex w-fit items-center gap-1 text-lg text-nowrap text-black dark:text-slate-100"
          >
            View Live Site
            <Icon name="arrow-right" className="h-3 w-3" />
          </Link>

          {sourceLink && (
            <Link
              href={sourceLink.href}
              title={`View ${client} source code`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {React.isValidElement(sourceLink.icon)
                ? React.cloneElement(sourceLink.icon as React.ReactElement<any>, { className: 'h-4 w-4 text-gray-900 dark:text-white' })
                : sourceLink.icon}
              View Repo
            </Link>
          )}
        </div>
      </AnimatedElement>
    </section>
  )
}
