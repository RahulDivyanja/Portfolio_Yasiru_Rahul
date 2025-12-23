import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { AnimatedElement } from "./ui/AnimatedElement"
import { DATA } from "@/app/data/resume"
import { CallToActionButton } from "./ui/CallToActionButton"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32">
      <div className="inside relative flex flex-[1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          <AnimatedElement
            element="span"
            delay={0.6}
            className="z-2 inline-flex items-center bg-white gap-2 self-start rounded-full px-3 py-2 text-xs font-medium shadow-lg dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
          >
            <ActivityDot className="dark:bg-slate-800" />
            {DATA.location}
          </AnimatedElement>

          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[0.7] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-100">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              {DATA.name}
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block"></AnimatedElement>
            <AnimatedElement element="span" delay={0.4} offsetPx={20} fadeDirection="left" className="inline-block text-slate-700 dark:text-slate-300 text-4xl">
              Full Stack Developer
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="max-w-xs text-sm leading-snug tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base dark:text-slate-300">
            <strong className="font-semibold text-slate-900 dark:text-slate-100">{DATA.description}</strong>
          </AnimatedElement>

          <CallToActionButton />
        </div>
        {/* Don't remove this span */}
        <span data-stack-target-id className="xs:ml-[8%] [flex:1 _0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]" />
        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block dark:hidden" />
      </div>
    </section>
  )
}
