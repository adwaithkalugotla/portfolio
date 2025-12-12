// components/ResumeHighlights.tsx
import { motion } from "framer-motion";

export default function ResumeHighlights() {
  return (
    <motion.section
      id="resume-highlights"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden py-24 bg-gradient-to-r from-rose-300 via-stone-200 to-teal-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Stronger depth so it matches Hero intensity */}
      <div className="pointer-events-none absolute inset-0 bg-black/10 dark:bg-black/35" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/15" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/15" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm"
        >
          Resume Highlights
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Education */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-3xl p-10 shadow-2xl border border-white/25 bg-gradient-to-br from-indigo-700/55 via-indigo-700/35 to-slate-900/35 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl" aria-hidden>
                🎓
              </span>
              <h3 className="text-2xl font-extrabold">Education</h3>
            </div>

            <div className="mt-7 space-y-6 text-white/90">
              <div>
                <div className="font-extrabold">M.S. Information Technology</div>
                <div className="font-semibold">
                  Gannon University (May 2025) — GPA 3.9
                </div>
              </div>

              <div>
                <div className="font-extrabold">B.Tech. Information Technology</div>
                <div className="font-semibold">JNTU (July 2023) — CGPA 7.0</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-3xl p-10 shadow-2xl border border-white/25 bg-gradient-to-br from-emerald-700/50 via-emerald-700/30 to-slate-900/35 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl" aria-hidden>
                🛡️
              </span>
              <h3 className="text-2xl font-extrabold">Certifications</h3>
            </div>

            <ul className="mt-7 space-y-4 text-white/90 font-semibold">
              <li className="font-extrabold">AWS Certified Cloud Practitioner</li>
              <li className="font-extrabold">Snowflake SnowPro Core</li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-3xl p-10 shadow-2xl border border-white/25 bg-gradient-to-br from-amber-700/50 via-amber-700/30 to-slate-900/35 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl" aria-hidden>
                💻
              </span>
              <h3 className="text-2xl font-extrabold">Skills</h3>
            </div>

            <div className="mt-7 space-y-5 text-white/90">
              <div>
                <div className="font-extrabold">Data &amp; Analytics</div>
                <div className="font-semibold">
                  SQL, Python, Power BI, Excel, Snowflake
                </div>
              </div>

              <div>
                <div className="font-extrabold">GenAI</div>
                <div className="font-semibold">GPT-4, Whisper, Prompt Engineering</div>
              </div>

              <div>
                <div className="font-extrabold">Engineering</div>
                <div className="font-semibold">Next.js, Flask, Docker, Tailwind CSS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
