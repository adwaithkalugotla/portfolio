// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand links to top */}
        <Link
          href="#hero"
          className="text-xl font-bold text-primary hover:text-secondary transition"
        >
          Adwaith Kalugotla
        </Link>
        <div className="space-x-6 text-gray-800">
          <Link href="#hero" className="hover:text-secondary transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-secondary transition">
            About
          </Link>
          <Link href="#skills" className="hover:text-secondary transition">
            Skills
          </Link>
          <Link href="#live-demo" className="hover:text-secondary transition">
            SpeakBuddy
          </Link>
        </div>
      </div>
    </nav>
  )
}
