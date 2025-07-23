// pages/projects.tsx
import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Adwaith Kalugotla</title>
      </Head>
      <section className="py-20 px-4 md:px-16 lg:px-32">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="SpeakBuddy"
            image="/images/userdetails.jpg"
            href="/speakbuddy"
            bullets={[
              "NSDA‑compliant per‑round timers",
              "Google Speech‑to‑Text + Whisper",
              "GPT‑4 debate evaluations",
            ]}
          />

          <ProjectCard
            title="Stock Price Predictor"
            image="/images/homepagestock.png"
            href="/stockpricepredictor"
            bullets={[
              "Add up to 4 stock symbols with Bollinger bands & SMA",
              "Mean, median & volatility stats",
              "Buy/Sell/Hold recommendations via ML models",
              "Flask & Python backend with interactive charts",
            ]}
          />
        </div>
      </section>
    </>
  )
}
