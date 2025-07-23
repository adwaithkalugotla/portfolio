// pages/speakbuddy.tsx
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const screenshots = [
  { src: '/images/mainfunction.jpg',     label: 'Main Function' },
  { src: '/images/modeselection.jpg',    label: 'Mode Selection' },
  { src: '/images/roundlabeller.jpg',    label: 'Round Labeller' },
  { src: '/images/transcriptscreen.jpg', label: 'Transcript Screen' },
  { src: '/images/userdetails.jpg',      label: 'User Details' },
]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, ease: 'easeOut' }
  })
}

export default function SpeakBuddy() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent(p => (p + 1) % screenshots.length)
  const prev = () => setCurrent(p => (p - 1 + screenshots.length) % screenshots.length)

  return (
    <>
      <Head>
        <title>SpeakBuddy • My Capstone Project</title>
        <meta
          name="description"
          content="SpeakBuddy: AI‑powered debate companion built with Flutter, Python, OpenAI GPT‑4, Google Speech‑to‑Text, and more."
        />
      </Head>

      <main className="space-y-16">
        {/* How It Works */}
        <motion.section
          className="py-16 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            How It Works
          </h2>
          <ol className="max-w-2xl mx-auto list-decimal list-inside space-y-4 text-white">
            {[
              'Record your debate rounds with NSDA‑compliant pause/resume timers.',
              'Stream audio to Google Speech‑to‑Text & Whisper for live transcription.',
              'Trigger GPT‑4 for instant analysis of structure, style & content.',
              'Export annotated transcripts as PDF or share links instantly.'
            ].map((step, i) => (
              <motion.li key={i} custom={i+1} variants={sectionVariants}>
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* Features & Implementation */}
        <motion.section
          className="py-16 bg-gradient-to-r from-green-300 via-teal-300 to-blue-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Key Features & Implementation
          </h2>
          <motion.ul
            className="max-w-2xl mx-auto list-disc list-inside space-y-3 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={sectionVariants}
          >
            <li>Real‑time round timing with auto spoken alerts.</li>
            <li>Filler‑word detection & speech‑rate metrics.</li>
            <li>Data‑driven insights: word counts, pauses, pace.</li>
            <li>Instant AI feedback and scoring via GPT‑4.</li>
            <li>Local storage of session history in SQLite.</li>
            <li>Exportable PDF summaries with full transcripts.</li>
          </motion.ul>
          <motion.p
            className="max-w-2xl mx-auto mt-6 text-white/90"
            custom={2}
            variants={sectionVariants}
          >
            SpeakBuddy is built with Flutter & Dart on the front end
            and a Python/Flask REST API. Audio is streamed to Google
            Speech‑to‑Text and OpenAI Whisper for transcription, then
            OpenAI GPT‑4 provides per‑round analysis. CI/CD is handled
            by GitHub Actions & Docker.
          </motion.p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          className="py-16 bg-gradient-to-r from-yellow-300 via-green-300 to-teal-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Tech Stack
          </h2>
          <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            {[
              'Flutter & Dart (iOS & Android)',
              'Python & Flask backend',
              'Google STT & OpenAI Whisper',
              'OpenAI GPT‑4 for AI analysis',
              'SQLite for local storage',
              'GitHub Actions & Docker for CI/CD'
            ].map((tech, i) => (
              <motion.li
                key={tech}
                className="bg-white bg-opacity-80 p-4 rounded-lg shadow"
                custom={i+1}
                variants={sectionVariants}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Capstone Mentor */}
        <motion.section
          className="py-16 bg-gradient-to-r from-indigo-300 via-blue-300 to-green-300 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            My Capstone Mentor
          </h2>
          <motion.div
            custom={1}
            variants={sectionVariants}
            className="mx-auto w-48 h-48 relative mb-4 rounded-full overflow-hidden shadow-lg"
          >
            <Image
              src="/images/capstonementor.jpg"
              alt="Dr. Liu Yunkai"
              fill
              unoptimized
            />
          </motion.div>
          <motion.h3 custom={2} variants={sectionVariants} className="text-white text-2xl font-semibold">
            Dr Liu Yunkai
          </motion.h3>
          <motion.p custom={3} variants={sectionVariants} className="max-w-2xl mx-auto text-white/90 mt-2">
            Dr Liu Yunkai is Professor & Program Director of Computer & Information Science at Gannon University.
            His research spans AI, Data Science, Cloud Computing, Big Data Analysis, Cybersecurity, and Mathematical Modeling.
          </motion.p>
          <motion.ul
            custom={4}
            variants={sectionVariants}
            className="max-w-md mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90"
          >
            <li>• Object‑Oriented Programming</li>
            <li>• Algorithm Design & Analysis</li>
            <li>• Discrete Mathematics & Combinatorics</li>
            <li>• Data Structures & Databases</li>
            <li>• Knowledge‑Based Systems & Cybersecurity</li>
            <li>• Mobile & Cloud Computing</li>
          </motion.ul>
        </motion.section>

        {/* Live Demo & Resources */}
        <motion.section
          className="py-16 bg-white dark:bg-gray-900 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h2 className="text-3xl font-bold mb-6 text-primary dark:text-secondary">
            Live Demo &amp; Resources
          </motion.h2>
          <motion.div
            className="space-x-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Link
              href="https://youtu.be/2eny---cx9w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Watch Live Demo
            </Link>
            <Link
              href="https://github.com/adwaithkalugotla/speakbuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View on GitHub
            </Link>
          </motion.div>
        </motion.section>

        {/* Screenshot Carousel */}
        <motion.section
          className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
            App Screenshots
          </h2>
          <div className="max-w-sm mx-auto px-4 relative">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900 mx-auto"
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary dark:bg-secondary p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Previous screenshot"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary dark:bg-secondary p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Next screenshot"
            >
              ›
            </button>
          </div>
        </motion.section>
      </main>
    </>
  )
}
