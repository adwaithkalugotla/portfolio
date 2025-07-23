// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Sync <html> class with theme state
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <>
      {/* Theme toggle button */}
      <button
        onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        className="
          fixed top-4 right-4 p-2 rounded-full shadow-lg z-50
          bg-white dark:bg-gray-800
          text-primary dark:text-secondary
          transition
        "
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {/* Your page */}
      <Component {...pageProps} />
    </>
  )
}
