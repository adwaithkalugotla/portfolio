// components/ResumeHighlights.tsx
import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: 'easeOut' }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    transition: { duration: 0.3 }
  }
}

export default function ResumeHighlights() {
  return (
    <motion.section
      className="py-20 px-4 md:px-16 lg:px-32 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-gray-100">
        Resume Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education Card */}
        <motion.div
          className="rounded-3xl p-6 bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
          variants={cardVariants}
          whileHover="hover"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🎓</span> Education
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>M.S., Information Technology</strong><br />
              Gannon University (May 2025) — GPA 3.9
            </li>
            <li>
              <strong>B.Tech, Information Technology</strong><br />
              JNTU (July 2023) — CGPA 7.0
            </li>
          </ul>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          className="rounded-3xl p-6 bg-gradient-to-br from-green-400 to-teal-500 text-white"
          variants={cardVariants}
          whileHover="hover"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🛡️</span> Certifications
          </h3>
          <ul className="space-y-2">
            <li>AWS Certified Cloud Practitioner</li>
            <li>SnowPro Core Certification</li>
          </ul>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          className="rounded-3xl p-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
          variants={cardVariants}
          whileHover="hover"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💻</span> Skills
          </h3>
          <ul className="space-y-2">
            <li>Python, SQL, Java, JavaScript, CSS</li>
            <li>AWS, Snowflake, Docker, Kubernetes</li>
            <li>Power BI, Excel, Next.js, Tailwind CSS</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
