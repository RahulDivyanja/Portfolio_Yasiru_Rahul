interface Props extends React.SVGProps<SVGSVGElement> {
  name: string
}

export const Icon: React.FC<Props> = ({ name, ...rest }) => {
  // Ensure icons follow theme by default: black in light, white in dark.
  const { className, ...svgProps } = rest as React.SVGProps<SVGSVGElement> & { className?: string }
  const mergedClass = [className, "text-black", "dark:text-white"].filter(Boolean).join(" ")

  return (
    <svg fill="currentColor" aria-hidden="true" className={mergedClass} {...svgProps}>
      <use xlinkHref={`/custom-icons.svg#${name}`} />
    </svg>
  )
}
