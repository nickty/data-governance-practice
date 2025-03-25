"use client"

import type React from "react"

import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { initializeDatabase } from "@/lib/db"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the database with mock data
    initializeDatabase()
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  )
}

