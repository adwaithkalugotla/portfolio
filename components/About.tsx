// components/About.tsx

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="py-20 bg-gradient-to-br from-rose-100 via-white to-teal-100"
  >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT — Images (no overlap) */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
            {/* Main graduation photo */}
            <motion.img
              src="/images/gradpic.jpg"
              alt="Graduation"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                w-72 h-72 sm:w-80 sm:h-80
                rounded-3xl object-cover shadow-2xl border-4 border-white/10
              "
            />

            {/* Family photo below, smaller */}
            <motion.img
              src="/images/family.jpg"
              alt="Family"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                w-52 h-52 sm:w-56 sm:h-56
                rounded-2xl object-cover shadow-xl border-4 border-white/10
              "
            />
          </div>

          {/* RIGHT — Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed mb-6"
            >
              I’m Adwaith Kalugotla - a{" "}
              <strong>Data Analyst and GenAI Engineer</strong> who loves transforming
              raw data into dashboards, insights, and full-stack AI applications.
              I work with <strong>SQL, Python, Power BI, Excel, and Snowflake</strong> on the
              analytics side, and build AI-powered products using GPT-4, Whisper, and
              modern frameworks like <strong>Next.js, Flask, and Flutter</strong>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed mb-6"
            >
              I enjoy solving real problems end-to-end - from data collection and cleaning,
              to visualization, to deploying working applications. My projects range from
              insurance-analytics dashboards to <strong>SpeakBuddy</strong>, an AI debate-analysis
              platform powered by GPT-4.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed"
            >
              Outside of tech, I’m a former esports team captain, a cricket enthusiast.
              
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
