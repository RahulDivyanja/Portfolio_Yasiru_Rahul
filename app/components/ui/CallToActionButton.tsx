"use client"

import Image from "next/image"
import profilePhoto from "../../../public/profile v2.png"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionButton, MotionDiv } from "@/app/utils/lazy-ui"
import { SITE_NAP } from "@/config/siteConfig"
import { Icon } from "../Icon"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const CallToActionButton = () => {
  const buttonVariants: Variants = {
    initial: {
      opacity: 0,
      filter: `blur(5px)`,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: 0.7,
      },
    },
    hover: {
      boxShadow: "none",
      y: 4,
      transition: {
        duration: 0.2,
      },
    },
  }

  const youVariants: Variants = {
    initial: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    animate: {
      opacity: 0,
      x: -10,

      width: 0,
    },
    hover: {
      opacity: 1,
      x: 0,
      width: 45,

      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: {
          delay: 0.1,
        },
      },
    },
  }

  return (
    <div className="flex items-center gap-3">
      <a href={SITE_NAP.profiles.github} target="_blank" rel="noopener" aria-label="Austin Serb's GitHub">
        <MotionButton
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={buttonVariants}
          className="group bubble-hover-cta active relative z-1 inline-flex h-11 w-max items-center gap-2 rounded-full bg-black px-3 text-sm font-medium tracking-tight text-white shadow-xl shadow-black/20"
        >
          <div className="pointer-events-none absolute inset-0.5 -z-1 rounded-full [background-image:url('/assets/framer-noise.png')] bg-size-[164px] bg-repeat opacity-12" />
          <div className="relative flex items-center gap-1">
            {/* Avatar */}
            <div className="relative h-7 w-7 rounded-full">
              <Image src={profilePhoto} alt="Profile photo of the founder" fill sizes="50px" className="rounded-full object-cover ring-2 ring-white/75" />
            </div>

            {/* + You entrance */}
            <MotionDiv variants={youVariants} className={clsx("hidden items-center gap-1 md:flex")}>
              <span className="text-xl">+</span>
              <Icon
                name="github"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-white text-sm font-semibold text-black ring-1 ring-black/50"
              />
            </MotionDiv>
          </div>
          See My Github
        </MotionButton>
      </a>

    <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View My CV"
  className="inline-block"
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "resume_click", {
        event_category: "engagement",
        event_label: "View My CV Button",
        value: 1,
      });
    }
  }}
>
  <MotionButton
    initial="initial"
    animate="animate"
    whileHover="hover"
    variants={buttonVariants}
    className="inline-flex h-11 items-center gap-2 rounded-[25px] border border-gray-200 bg-white px-3 text-sm font-medium text-black shadow-sm dark:bg-slate-800 dark:border-gray-700 dark:text-white"
  >
    <span>View My CV</span>
    <Icon
      name="arrow-right"
      className="h-4 w-4 text-black dark:text-white ml-1"
    />
  </MotionButton>
</a>

    </div>
  )
}
