// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80
        backdrop-blur
        z-40
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand links to top */}
        <Link
          href="#hero"
          className="
            text-xl font-bold
            text-black dark:text-white
            hover:text-gray-700 dark:hover:text-gray-300
            transition-colors duration-300
          "
        >
          Adwaith Kalugotla
        </Link>

        <div className="space-x-6">
          <Link
            href="#hero"
            className="
              text-black dark:text-white
              hover:text-gray-700 dark:hover:text-gray-300
              transition-colors duration-300
            "
          >
            Home
          </Link>
          <Link
            href="#about"
            className="
              text-black dark:text-white
              hover:text-gray-700 dark:hover:text-gray-300
              transition-colors duration-300
            "
          >
            About
          </Link>
          <Link
            href="#skills"
            className="
              text-black dark:text-white
              hover:text-gray-700 dark:hover:text-gray-300
              transition-colors duration-300
            "
          >
            Skills
          </Link>
          <Link
            href="#live-demo"
            className="
              text-black dark:text-white
              hover:text-gray-700 dark:hover:text-gray-300
              transition-colors duration-300
            "
          >
            SpeakBuddy
          </Link>
        </div>
      </div>
    </nav>
  )
}
