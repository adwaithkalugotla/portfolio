import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Let’s Connect
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/adwaith-kalugotla-68720831a/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>

        {/* GitHub profile */}
        <a
          href="https://github.com/adwaithkalugotla"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border-2 border-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          GitHub
        </a>

        {/* Email */}
        <a
          href="mailto:adwaithsai20@gmail.com"
          className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  )
}
