export const WhiteButtonLink: React.FC<{ children: React.ReactNode; href: string; className?: string }> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "bubble-hover flex w-fit items-center gap-1 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium whitespace-nowrap text-black shadow-lg transition-all duration-300 hover:translate-y-0.5 hover:shadow-none dark:bg-white/5 dark:border-white/10 dark:text-white " +
        (className ?? "")
      }
    >
      {children}
    </a>
  )
}
