import Image, { ImageProps } from "next/image"
import { ReactElement } from "react"
import { Socials } from "./Socials"
// import { socialLinks } from "./Footer/FooterV2"
import { MotionDiv } from "../utils/lazy-ui"
import { DATA } from "../data/resume"

interface ImageRevealProps extends Omit<ImageProps, "placeholder"> {
  className?: string
  priority?: boolean
}

export function ImageReveal({ src, alt, className = "", priority = false, ...img }: ImageRevealProps): ReactElement {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <MotionDiv
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <Socials
          socialLinks={[
            { icon: "github", href: DATA.contact.social.GitHub.url },
            { icon: "linkedin", href: DATA.contact.social.LinkedIn.url }
          ]}
          className="absolute right-4 bottom-4 z-5"
          iconClassName="md:opacity-85 hover:opacity-100"
        />
        <Image
          id="headshot"
          {...img}
          src={src}
          alt={alt || "Portfolio Image"}
          fill
          priority={priority}
          className={`rounded-2xl object-cover saturate-125`}
          sizes="(max-width: 560px) 300px, (max-width: 768px) 500px, 50vw"
        />
      </MotionDiv>
    </div>
  )
}
