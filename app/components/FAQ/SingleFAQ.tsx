"use client"

import { type FAQ } from "./FAQTable"
import { useScopedUI } from "@react-zero-ui/core"

export const SingleFAQ = ({ question, answer, index }: FAQ) => {
  const [isOpen, setIsOpen] = useScopedUI<"open" | "closed">("faq", "closed")

  return (
    <div
      data-faq={isOpen}
      ref={setIsOpen.ref}
      className="relative flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white text-sm hover:cursor-pointer"
      onClick={() => setIsOpen((prev) => (prev === "open" ? "closed" : "open"))}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div
          // animate={{ x: isOpen ? -30 : 0 }}
          // transition={{ duration: 0.2, ease: "easeOut" }}
          className="faq-open:-translate-x-7.5 flex items-center gap-4 overflow-hidden duration-200 ease-out will-change-transform"
        >
          <span className="faq-open:opacity-0 text-slate-500 duration-200 ease-out">0{index + 1}</span>
          <h3 className="font-medium">{question}</h3>
        </div>

        {/* toggle */}
        <button
          aria-label={"Toggle Faq Answer"}
          type="button"
          className="relative flex h-5 w-5 items-center justify-center text-sm hover:cursor-pointer"
          title="Toggle Faq Answer"
        >
          <div className="absolute h-0.5 w-2.5 rounded-full bg-black" />
          <div
            // animate={{ rotate: isOpen ? 0 : 270 }}
            // transition={{ duration: 0.2, ease: "easeOut" }}
            className="faq-closed:rotate-[270deg] absolute h-0.5 w-2.5 rounded-full bg-black duration-200 ease-out will-change-transform"
          />
        </button>
      </div>

      {/* answer */}
      <div
        className="faq-open:grid-rows-[1fr] faq-open:pt-4 faq-open:pb-4 faq-closed:grid-rows-[0fr] faq-closed:opacity-0 grid overflow-hidden border-t border-gray-300 px-4 [transition:padding_300ms_ease-out,opacity_200ms_ease-out,grid-template-rows_200ms_ease-out]"
        // initial={false}
        // animate={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0, paddingTop: isOpen ? 16 : 0, paddingBottom: isOpen ? 16 : 0 }}
        // transition={{ duration: 0.2, ease: "easeOut", paddingTop: { duration: 0.3 }, paddingBottom: { duration: 0.3 } }}
      >
        <div className="min-h-0">{answer}</div>
      </div>
    </div>
  )
}
