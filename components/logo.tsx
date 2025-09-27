"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  size?: "sm" | "md" | "lg"
  animated?: boolean
  showText?: boolean
}

export function Logo({ className, size = "md", animated = false, showText = false }: LogoProps) {
  const sizeMap = {
    sm: { box: "h-7 w-7", icon: 16, text: "text-sm" },
    md: { box: "h-9 w-9", icon: 20, text: "text-base" },
    lg: { box: "h-11 w-11", icon: 24, text: "text-lg md:text-xl" },
  }[size]

  return (
    <Link
      href="/"
      aria-label="MindLoom Home"
      className={cn(
        "group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md",
        className,
      )}
    >
      <span
        className={cn(
          "relative grid place-items-center rounded-md ring-1",
          "bg-transparent text-primary ring-border/40",
          sizeMap.box,
          animated && "transition-transform duration-300 group-hover:scale-105",
        )}
        aria-hidden="true"
      >
        {/* minimal academic open-book icon */}
        <svg
          width={sizeMap.icon + 6}
          height={sizeMap.icon + 6}
          viewBox="0 0 24 24"
          fill="none"
          role="img"
          aria-label="MindLoom mark"
        >
          {/* left page curve */}
          <path
            d="M4 8.25c2-1.2 4-1.7 7-1.5v10.5c-3-.2-5 .3-7 1.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* right page curve */}
          <path
            d="M20 8.25c-2-1.2-4-1.7-7-1.5v10.5c3-.2 5 .3 7 1.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* subtle spine */}
          <path d="M12 6.75V17.25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
          {/* mind dot (animated if enabled) */}
          <circle cx="12" cy="6.5" r="0.9" fill="currentColor" className={animated ? "animate-pulse" : ""} />
        </svg>
      </span>

      {showText && (
        <span
          className={cn(
            "font-semibold tracking-tight text-foreground",
            sizeMap.text,
            animated && "transition-colors duration-300 group-hover:text-primary",
          )}
        >
          MindLoom
        </span>
      )}
    </Link>
  )
}
