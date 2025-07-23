import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Let’s Connect</h2>
      <div className="space-x-4">
        <a
          href="https://www.linkedin.com/in/adwaith-kalugotla-68720831a/"
          target="_blank"
          rel="noopener"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/adwaithkalugotla/speakbuddy"
          target="_blank"
          rel="noopener"
          className="px-5 py-2 border-2 border-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          App on GitHub
        </a>
      </div>
    </section>
  )
}
