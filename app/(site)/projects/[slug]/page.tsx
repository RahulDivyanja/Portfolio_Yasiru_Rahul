import React from "react"
import { DATA } from "@/app/data/resume"
import { PROJECTS_MAP } from "@/app/data/project-data"
import { notFound } from "next/navigation"
import { Link } from "@/app/utils/Link"
import Image from "next/image"
import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = DATA.projects.find((p) => p.slug === slug)
    if (!project) return {}

    return {
        title: `${project.title} - Yasiru Rahul`,
        description: project.description,
    }
}

export async function generateStaticParams() {
    return DATA.projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    // Check for Rich Project Data first
    const richProjectData = PROJECTS_MAP[slug]
    if (richProjectData) {
        return <ProjectDisplay projectData={richProjectData} />
    }

    const project = DATA.projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <Link
                        href="/#projects-grid"
                        className="group flex w-fit items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back to projects
                    </Link>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl heading">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 text-sm muted-text">
                        {project.dates && <time>{project.dates}</time>}
                        {project.active && (
                            <>
                                <span>•</span>
                                <span className="text-green-600 dark:text-green-400">Active</span>
                            </>
                        )}
                    </div>
                </div>

                {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-800">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-8 body-text">
                        {project.description}
                    </p>
                </div>

                {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-4">
                    {(() => {
                        const links = project.links ?? []
                        const demoLink = links.find((l) => /live|demo|site/i.test(l.type))
                        const sourceLink = links.find((l) => /source|code|git|repo/i.test(l.type))

                        return (
                            <>
                                {demoLink && (
                                    <Link
                                        href={demoLink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                                    >
                                        {React.isValidElement(demoLink.icon)
                                            ? React.cloneElement(demoLink.icon as React.ReactElement<any>, { className: 'h-4 w-4 text-white dark:text-gray-900' })
                                            : demoLink.icon}
                                        {demoLink.type}
                                    </Link>
                                )}

                                {sourceLink && (
                                    <Link
                                        href={sourceLink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                                    >
                                        {React.isValidElement(sourceLink.icon)
                                            ? React.cloneElement(sourceLink.icon as React.ReactElement<any>, { className: 'h-4 w-4 text-gray-900 dark:text-white' })
                                            : sourceLink.icon}
                                        {sourceLink.type}
                                    </Link>
                                )}
                            </>
                        )
                    })()}
                </div>
            </div>
        </section>
    )
}
