// components/VideoDemo.tsx
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VideoDemo() {
  return (
    <section className="py-20 bg-pink-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        {/* Headline */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Live Demo
        </h2>

        {/* Sub‑headline */}
        <p className="text-lg text-gray-800 dark:text-gray-200 text-center">
          See how <strong className="text-primary dark:text-secondary">SpeakBuddy</strong> transforms your debate prep:
          record with precision, transcribe on the fly, and get instant AI‑powered feedback.
        </p>

        {/* Feature list */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <li className="flex items-start space-x-3">
            <span className="text-green-600 text-xl mt-1">✅</span>
            <span className="text-gray-800 dark:text-gray-200">
              Pause &amp; resume with NSDA‑style timers
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-purple-600 text-xl mt-1">💬</span>
            <span className="text-gray-800 dark:text-gray-200">
              Live transcription via Google Speech‑to‑Text &amp; Whisper
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-600 text-xl mt-1">🤖</span>
            <span className="text-gray-800 dark:text-gray-200">
              Instant GPT‑4 scoring &amp; actionable feedback
            </span>
          </li>
        </ul>

        {/* YouTube embed (16:9) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative pt-[56.25%] overflow-hidden rounded-xl shadow-lg"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2eny---cx9w"
            title="SpeakBuddy Live Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* Explore SpeakBuddy button */}
        <div className="text-center">
          <Link
            href="/speakbuddy"
            className="inline-block mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
          >
            Explore SpeakBuddy
          </Link>
        </div>
      </div>
    </section>
  )
}
