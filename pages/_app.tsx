// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Toggle the `dark` class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="relative min-h-screen">
      {/* Theme toggle button */}
      <button
        onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        className="
          fixed top-4 right-4 p-2 rounded-full shadow-lg z-[9999]
          bg-white dark:bg-gray-800
          text-black dark:text-white
          transition-colors duration-200
        "
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* Your page content */}
      <Component {...pageProps} />
    </div>
  )
}
