"use client"

import { useEffect, useState } from "react"

type TextSliderProps = {
  words: string[]
  height?: number
  mobileHeight?: number
  durations?: number[] // seconds per word
  defaultDuration?: number
}

export const TextSlider: React.FC<TextSliderProps> = ({
  words,
  height = 40,
  mobileHeight = 30,
  durations,
  defaultDuration = 1.5,
}) => {
  const styles = { "--word-height": `${height}px`, "--word-height-mobile": `${mobileHeight}px` } as React.CSSProperties

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const handler = () => setReduceMotion(mq.matches)
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  useEffect(() => {
    if (reduceMotion || words.length <= 1) return

    const dur = (durations?.[index] ?? defaultDuration) * 1000
    const t1 = setTimeout(() => setVisible(false), Math.max(0, dur - 200))
    const t2 = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length)
      setVisible(true)
    }, dur)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [index, durations, defaultDuration, words.length, reduceMotion])

  const display = reduceMotion ? words[0] : words[index]

  return (
    <span className="word-container inline-flex w-fit" style={styles}>
      <span key={display + index} className="text-slider-current" data-visible={visible ? "true" : "false"}>
        {display}
      </span>
    </span>
  )
}
