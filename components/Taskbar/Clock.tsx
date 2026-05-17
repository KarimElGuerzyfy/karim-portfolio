"use client"

import { useState, useEffect } from "react"

export default function Clock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className=" tabular-nums"
      style={{ color: "var(--text-dim)" }}
    >
      {time}
    </span>
  )
}