"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (isClient) {
    return (
      <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} {...props}>
        {children}
      </NextThemesProvider>
    )
  }
}

