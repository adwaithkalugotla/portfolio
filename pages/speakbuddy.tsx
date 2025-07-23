// pages/speakbuddy.tsx
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const screenshots = [
  { src: '/images/mainfunction.jpg',     label: 'Main Function' },
  { src: '/images/modeselection.jpg',    label: 'Mode Selection' },
  { src: '/images/roundlabeller.jpg',    label: 'Round Labeller' },
  { src: '/images/transcriptscreen.jpg', label: 'Transcript Screen' },
  { src: '/images/userdetails.jpg',      label: 'User Details' },
]

export default function SpeakBuddy() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((p) => (p + 1) % screenshots.length)
  const prev = () => setCurrent((p) => (p - 1 + screenshots.length) % screenshots.length)

  return (
    <>
      <Head>
        <title>SpeakBuddy • My Capstone Project</title>
        <meta
          name="description"
          content="SpeakBuddy: AI‑powered debate companion built with Flutter, Python, OpenAI GPT‑4, Google Speech‑to‑Text, and more."
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            SpeakBuddy
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            AI‑powered debate companion: record your rounds, get live transcription,  
            and receive GPT‑4 scoring &amp; feedback in real time.
          </p>
        </header>

        {/* How It Works & Tech Stack */}
        <section className="max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Record debate rounds with pause/resume &amp; NSDA‑compliant timers.</li>
              <li>Live transcription via Google Speech‑to‑Text &amp; Whisper.</li>
              <li>GPT‑4 analyzes structure, style, and content; delivers scores &amp; winner.</li>
              <li>Export summary as PDF or share via link instantly.</li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Tech Stack
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Mobile:</strong> Flutter &amp; Dart</li>
              <li><strong>Backend:</strong> Python + Flask</li>
              <li><strong>Transcription:</strong> Google Speech‑to‑Text &amp; Whisper</li>
              <li><strong>AI Analysis:</strong> OpenAI GPT‑4</li>
              <li><strong>Storage:</strong> SQLite</li>
              <li><strong>CI/CD:</strong> GitHub Actions &amp; Docker</li>
            </ul>
          </motion.div>

          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/adwaithkalugotla/speakbuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-6 py-3 bg-primary text-white rounded-lg transition-colors duration-200 hover:bg-secondary"
            >
              View on GitHub
            </Link>
            <Link
              href="https://youtu.be/2eny---cx9w"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-6 py-3 border-2 border-primary text-primary rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              Watch Live Demo
            </Link>
          </div>
        </section>

        {/* Screenshot Carousel */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-sm mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              App Screenshots
            </h2>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-lg shadow-lg bg-white mx-auto"
                >
                  <div className="w-56 max-h-[60vh] overflow-hidden mx-auto">
                    <Image
                      src={screenshots[current].src}
                      alt={screenshots[current].label}
                      width={224}
                      height={400}
                      className="object-contain w-full h-auto"
                    />
                  </div>
                  <figcaption className="py-2 text-sm text-gray-600 dark:text-gray-400">
                    {screenshots[current].label}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
                aria-label="Next screenshot"
              >
                ›
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
