// components/Hero.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        bg-gradient-to-r from-primary to-secondary
        bg-[length:200%_200%] animate-gradient-x
        min-h-screen flex flex-col items-center justify-center
        text-white text-center px-4
      "
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Adwaith Kalugotla</h1>
      <p className="text-xl max-w-xl mb-8">
        AWS & Snowflake‑certified Data Analyst turning raw data into actionable insights.
      </p>

      {/* Your fireworks shot */}
      <img
        src="/images/indexpic.jpg"
        alt="Fireworks celebration"
        className="w-64 h-64 object-cover rounded-lg shadow-xl mb-8"
      />

      <div className="space-x-4">


        {/* View All Projects (now correctly pointing to /projects) */}
        <Link
          href="/projects"
          className="btn px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition"
        >
          View All Projects
        </Link>

        {/* Download Resume */}
        <a
          href="/resume_Adwaith.pdf"
          download
          className="btn px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  )
}
