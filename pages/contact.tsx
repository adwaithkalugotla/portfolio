import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head><title>Contact | Adwaith Kalugotla</title></Head>
      <section className="py-20 px-4 md:px-16 lg:px-32">
        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
        <p>Email me at <a href="mailto:adwaith@example.com" className="text-blue-600">adwaith@example.com</a></p>
      </section>
    </>
  )
}
