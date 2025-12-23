"use client"

import { useEffect, useState } from "react"
import { Icon } from "../Icon"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="footer-link" aria-hidden="true">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      aria-label={theme === "dark" ? "Use light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light" : "Dark"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="footer-link"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? <Icon name="sun" height={18} width={18} /> : <Icon name="moon" height={18} width={18} />}
    </button>
  )
}
