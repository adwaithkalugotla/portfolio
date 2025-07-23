import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 🔸 Images side-by-side, each in a colored ring */}
        <div className="flex justify-center space-x-6">
          <div className="bg-white p-2 rounded-3xl shadow-xl ring-4 ring-primary">
            <Image
              src="/images/profile.jpg"
              alt="Adwaith Kalugotla headshot"
              width={160}
              height={160}
              className="rounded-full object-cover"
            />
          </div>
          <div className="bg-white p-2 rounded-3xl shadow-xl ring-4 ring-secondary">
            <Image
              src="/images/family.jpg"
              alt="Adwaith with family at graduation"
              width={320}
              height={240}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* 🔸 Text content */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About Me</h2>
          <p>
            Aspiring Analyst with AWS Certified Cloud Practitioner &amp; SnowPro Core.  
            I thrive on turning messy data into clear, actionable insights and building  
            scalable cloud‑powered pipelines.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Education</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>M.S., Information Technology</strong>, Gannon University (May 2025)  
              – AWS Cloud Computing, Statistical Computing (Python), BI Methods (Power BI)
            </li>
            <li>
              <strong>B.Tech, Information Technology</strong>, JNTU (July 2023)  
              – Web Dev (HTML/JS), Data Structures, Cyber‑Security Research
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Certifications &amp; Skills
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AWS Certified Cloud Practitioner &amp; SnowPro Core</li>
            <li>Python, SQL, C/C++, JavaScript, Java</li>
            <li>Google Speech‑to‑Text &amp; Whisper, OpenAI GPT‑4</li>
            <li>Docker, Kubernetes, SQLite, PostgreSQL</li>
            <li>Power BI, Excel, GitHub, CI/CD (GitHub Actions)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
