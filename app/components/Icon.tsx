interface Props extends React.SVGProps<SVGSVGElement> {
  name: string
}

export const Icon: React.FC<Props> = ({ name, ...rest }) => {
  return (
    <svg fill="currentColor" aria-hidden="true" {...rest}>
      <use xlinkHref={`/custom-icons.svg#${name}`} />
    </svg>
  )
}
