import Head from 'next/head'

export default function Certifications() {
  return (
    <>
      <Head><title>Certifications | Adwaith Kalugotla</title></Head>
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/images/aws-badge.png" alt="AWS Cloud Practitioner" className="h-24" />
          <img src="/images/snowflake-badge.png" alt="SnowPro Core" className="h-24" />
        </div>
      </section>
    </>
  )
}
