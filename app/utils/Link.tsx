import NextLink, { LinkProps as NextLinkProps } from "next/link"

export const Link: React.FC<
  NextLinkProps & { children: React.ReactNode; className?: string; target?: string; rel?: string }
> = ({ children, className, target, rel, ...props }) => {
  return (
    <NextLink {...props} data-vt className={className} target={target ?? undefined} rel={rel ?? undefined}>
      {children}
    </NextLink>
  )
}
