import Image from "next/image"
import clsx from "clsx"
// import profilePhoto from "../images/profile.webp"
// import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { DATA } from "../data/resume"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white dark:border-white/5 dark:bg-transparent", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500 dark:text-slate-400">About</span>
          <br />
          {DATA.name.split(" ")[0]} {DATA.name.split(" ")[1]}
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex flex-[1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={DATA.avatarUrl} alt={DATA.name} className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                {DATA.name}
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Developer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="flex-[1.5_0_0px] space-y-8 text-slate-500 dark:text-slate-400">
            <div>
              <p>
                I’m a third-year Software Technology undergraduate with hands-on experience building scalable, real-world applications for both client and
                university projects. I primarily work with the MERN stack, focusing on clean backend integration, responsive UI design, and real-time
                functionality.
              </p>{" "}
              <br />
              <p>
                I enjoy turning ideas into reliable products, shipping usable versions quickly, and iterating based on feedback. My work emphasizes performance,
                maintainability, and user experience, with a strong focus on modern frontend development using React and Next.js, backed by Node.js on the
                server side.
              </p>{" "}
              <br />
              <strong>
                <p>Currently, I’m seeking internship opportunities to further develop my skills and contribute to impactful projects. Let’s connect!</p>
              </strong>
            </div>
            {/* signature */}
            {/* <Image src={signature} alt="Signature" className="relative mt-6 -ml-3 h-12 w-auto" /> */}
          </Typography>
        </div>
      </div>
    </section>
  )
}
