// components/Hero.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        bg-gradient-to-r from-primary to-secondary
        bg-[length:200%_200%] animate-gradient-x
        text-white
        pt-32 pb-20
      "
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I’m Adwaith Kalugotla
          </h1>

          <p className="text-lg sm:text-xl max-w-xl mb-4 mx-auto md:mx-0">
            Data Analyst &amp; GenAI-driven Developer using SQL, Python, Power&nbsp;BI,
            Snowflake, and GPT-4 to turn messy data into dashboards, machine-learning
            insights, and full-stack AI products.
          </p>

          {/* Identity chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 text-sm font-medium">
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/40">
              Data Analytics &amp; BI (SQL · Power&nbsp;BI · Python · Excel)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/40">
              GenAI &amp; Prompt Engineering (GPT-4, Whisper)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 border border-white/40">
              Full-stack Apps (Next.js · Flask · Flutter)
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-primary transition"
            >
              View All Projects
            </Link>
            <a
              href="/BSA_onepage(2).pdf"
              download
              className="px-6 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-primary transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT: Profile photo */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <div className="absolute -inset-1 rounded-3xl bg-white/20 blur-lg" />
            <img
              src="/images/profile.jpg"
              alt="Adwaith Kalugotla"
              className="
                relative w-full h-full object-cover
                rounded-3xl border-4 border-white/70 shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
