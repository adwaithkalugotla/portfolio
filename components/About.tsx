// pages/about.tsx
import Head from 'next/head'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: 'easeOut' }
  }
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  hover: { scale: 1.05, textShadow: '0px 0px 8px rgba(0,0,0,0.2)' }
}

export default function About() {
  return (
    <>
      <Head>
        <title>About • Adwaith Kalugotla</title>
        <meta name="description" content="About Adwaith Kalugotla – Data Analyst & Software Developer" />
      </Head>

      <motion.section
        className="py-20 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 dark:from-indigo-900 dark:via-pink-900 dark:to-yellow-900"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Images */}
          <motion.div className="flex flex-col gap-8 justify-center items-center" variants={item}>
            {[{
              src: '/images/profile.jpg',
              alt: 'Headshot',
              ring: 'ring-pink-500'
            },{
              src: '/images/family.jpg',
              alt: 'Graduation with Family',
              ring: 'ring-teal-500'
            }].map((img, i) => (
              <motion.div
                key={i}
                className={`relative w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden shadow-2xl ring-4 ${img.ring}`}
                variants={item}
                whileHover="hover"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Text */}
          <motion.div className="space-y-8" variants={item}>
            <motion.h2
              className="text-4xl font-extrabold text-primary dark:text-secondary"
              variants={item}
            >
              About Me
            </motion.h2>

            <motion.p className="text-lg text-gray-800 dark:text-gray-200" variants={item}>
              Aspiring <span className="font-semibold">Data Analyst</span> &amp; 
              <span className="font-semibold"> Software Developer</span> with AWS Certified Cloud Practitioner &amp; SnowPro Core.
              I thrive on turning messy data into clear, actionable insights, building scalable
              cloud‑powered pipelines, and architecting clean, maintainable code.
            </motion.p>

            {/* Education */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <span className="text-indigo-500 dark:text-yellow-400">🎓</span>
                Education
              </h3>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <motion.li
                  variants={item}
                  whileHover="hover"
                  className="pl-4 border-l-4 border-pink-500"
                >
                  <strong>M.S., Information Technology</strong>, Gannon University (May 2025) — AWS Cloud Computing, Python, BI Methods
                </motion.li>
                <motion.li
                  variants={item}
                  whileHover="hover"
                  className="pl-4 border-l-4 border-teal-500"
                >
                  <strong>B.Tech, Information Technology</strong>, JNTU (July 2023) — Web Dev, Data Structures, Cyber‑Security
                </motion.li>
              </ul>
            </motion.div>

            {/* Certifications & Skills */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <span className="text-indigo-500 dark:text-yellow-400">🛠</span>
                Certifications &amp; Skills
              </h3>
              <motion.ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                {[
                  'AWS Certified Cloud Practitioner & SnowPro Core',
                  'Python, SQL, C/C++, JavaScript, Java',
                  'Google STT & Whisper, OpenAI GPT‑4',
                  'Docker, Kubernetes, SQLite, PostgreSQL',
                  'Power BI, Excel, GitHub, CI/CD'
                ].map((skill, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    whileHover="hover"
                    className="flex items-center gap-2"
                  >
                    <span className="text-pink-500 dark:text-teal-400">•</span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
