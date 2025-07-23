// pages/stockpricepredictor.tsx
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function StockPricePredictor() {
  return (
    <>
      <Head>
        <title>Stock Price Predictor | Adwaith Kalugotla</title>
      </Head>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 md:px-16 lg:px-32 bg-white dark:bg-gray-900"
      >
        <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Stock Price Predictor
        </h2>

        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          A web application (Flask/Python & ML) that lets you pick up to 4 tickers,
          visualizes technical indicators, and provides buy/sell/hold recommendations.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-12 text-gray-700 dark:text-gray-300">
          <li>Add up to 4 stock symbols for simultaneous prediction</li>
          <li>Bollinger Bands & 20‑day SMA visualizations</li>
          <li>Mean, median & volatility statistics</li>
          <li>Action recommendations: Buy, Sell, or Hold</li>
        </ul>

        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src="/images/homepagestock.png"
            alt="Home page"
            width={600}
            height={350}
            className="rounded-lg shadow-lg dark:shadow-black"
          />
          <Image
            src="/images/addstock.png"
            alt="Adding stocks"
            width={600}
            height={350}
            className="rounded-lg shadow-lg dark:shadow-black"
          />
          <Image
            src="/images/bollingerbands.png"
            alt="Bollinger Bands"
            width={600}
            height={350}
            className="rounded-lg shadow-lg dark:shadow-black"
          />
          <Image
            src="/images/normalizedstatsrounded.png"
            alt="Normalized stats"
            width={600}
            height={350}
            className="rounded-lg shadow-lg dark:shadow-black"
          />
          <Image
            src="/images/normalizedvalueeval.png"
            alt="Normalized value evaluation"
            width={600}
            height={350}
            className="rounded-lg shadow-lg dark:shadow-black"
          />
          <Image
            src="/images/buysellholdpage.png"
            alt="Buy/Sell/Hold"
            width={600}
            height={350}
            className="rounded-lg shadow-lg dark:shadow-black"
          />
        </div>
      </motion.section>
    </>
  )
}
