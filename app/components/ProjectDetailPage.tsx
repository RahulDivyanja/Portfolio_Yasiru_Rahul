import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Icon } from "./Icon"

interface ProjectProps {
    title: string
    description: string
    image: StaticImageData | string
    technologies: readonly string[]
    links?: readonly {
        type: string
        href: string
        icon?: React.ReactNode
    }[]
    dates?: string
}

export const ProjectDetailPage = ({ project }: { project: ProjectProps }) => {
    const sourceLink = project.links?.find((l) => l.type === "Source")
    const demoLink = project.links?.find((l) => l.type !== "Source")

    return (
        <div className="min-h-screen bg-white dark:bg-[#0b0b0d]">
            {/* Hero Section */}
            <div className="relative h-[36vh] md:h-[44vh] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent dark:from-[#0b0b0d]" />

                <div className="inside-container relative z-10 flex h-full flex-col justify-end pb-12">
                    <Link href="/#projects" className="mb-6 w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 duration-200 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20">
                        ← Back to Projects
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
                        {project.title}
                    </h1>
                    {project.dates && (
                        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{project.dates}</p>
                    )}
                </div>
            </div>

            <div className="inside-container py-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">About the Project</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-300">
                            <p>{project.description}</p>
                        </div>

                        <div className="mt-8">
                            <Image
                                src={project.image}
                                alt={`${project.title} Screenshot`}
                                width={1200}
                                height={675}
                                className="rounded-xl border border-slate-200 shadow-xl dark:border-white/10"
                            />
                        </div>

                        {/* Primary actions (Demo + GitHub) */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {demoLink && (
                                <Link
                                    href={demoLink.href}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                >
                                    <Icon name="globe" className="h-4 w-4" />
                                    View Demo
                                </Link>
                            )}

                            {sourceLink && (
                                <Link
                                    href={sourceLink.href}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                                >
                                    <Icon name="github" className="h-4 w-4" />
                                    View GitHub
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Links */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Project Links</h3>
                            <div className="flex flex-col gap-3">
                                {project.links && project.links.length > 0 ? (
                                    project.links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                        >
                                            {link.type === "Source" ? <Icon name="github" className="h-4 w-4" /> : <Icon name="globe" className="h-4 w-4" />}
                                            {link.type === "Source" ? "View GitHub Repo" : "Visit Live Site"}
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-slate-500 dark:text-slate-400">No public links available.</p>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
