// pages/index.tsx
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ResumeHighlights from '@/components/ResumeHighlights'
import CTABanner from '@/components/CTABanner'
import VideoDemo from '@/components/VideoDemo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adwaith Kalugotla | Portfolio</title>
        <meta name="description" content="AWS & Snowflake-certified Data Analyst" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* fixed navbar */}
      <Navbar />

      {/* page content */}
      <main className="pt-20 space-y-16">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <ResumeHighlights />
        </section>

        <section id="cta">
          <CTABanner />
        </section>

        <section id="live-demo">
          <VideoDemo />
        </section>
      </main>
    </>
  )
}
