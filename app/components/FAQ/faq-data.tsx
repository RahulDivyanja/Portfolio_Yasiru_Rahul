import { type FAQ } from "./FAQTable"

export const faqData: FAQ[] = [
  {
    index: 0,
    question: "What is the purpose of a developer portfolio?",
    answer: (
      <>
        A great developer portfolio is more than a resume; it&apos;s a live demonstration of your skills and philosophies. This site, for example, isn&apos;t
        just a list of projects; it&apos;s built on my own performance-oriented library (React-Zero-UI). to showcase your commitment to simple, fast, and
        elegant code. a recent study found that portfolios DO have a future.{" "}
        <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5306426/" className="text-slate-500">
          Do portfolios have a future?
        </a>
      </>
    ),
  },
  {
    index: 1,
    question: "What's actually included in your web design packages?",
    answer: (
      <>
        Everything you need for a successful launch and nothing you don&apos;t. Every package includes a strategic game plan, conversion-focused copywriting, a
        custom mobile-first design, SEO foundation setup, and our 90-day post-launch support guarantee. We believe in total transparency—no hidden fees, ever.
      </>
    ),
  },
  {
    index: 2,
    question: "What are the 'golden rules' of a great business website?",
    answer: (
      <>
        A great website isn&apos;t just about looks; it&apos;s about results. Our five golden rules are:
        <ul className="list-disc pl-4">
          <li>Speed: If it doesn&apos;t load in under 2 seconds, you&apos;re losing customers.</li>
          <li>Clarity: It must pass the &quot;5-second test&quot;: visitors must know what you do instantly.</li>
          <li>Action: Every page needs a clear call-to-action guiding the user.</li>
          <li>Mobile-First: It must be flawless on a phone, where most users will see it.</li>
          <li>SEO-Ready: It must be built to be found on Google from day one.</li>
        </ul>
      </>
    ),
  },
  {
    index: 3,
    question: "How do I find the right web designer for my business?",
    answer: (
      <>
        Look for three things:
        <ul className="list-disc pl-4">
          <li>A Portfolio with Results: Don&apos;t just look for pretty sites; ask for proof that their work actually helped grow a business.</li>
          <li>A Transparent Process: They should be able to clearly explain their steps from start to finish.</li>
          <li>
            A Focus on ROI: The right partner talks less about colors and fonts and more about how they&apos;ll turn your website into a predictable source of
            revenue.
          </li>
        </ul>
      </>
    ),
  },
  {
    index: 4,
    question: "What is the 3 second rule in web design?",
    answer: (
      <>
        First impressions matter. Your have 3 seconds to make a good impression. and capture attention. After a first impression is formed on a website, it is
        difficult to change. <strong className="text-slate-500">We focus on making a good first impression.</strong>
        <a href={"https://academicworks.cuny.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1157&context=ny_pubs"} className="text-xs text-slate-500">
          An Analysis of First Impression{" "}
        </a>
      </>
    ),
  },
]
