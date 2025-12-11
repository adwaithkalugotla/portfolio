// pages/healthcare-dashboard.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HealthcareDashboard() {
  return (
    <>
      <Head>
        <title>Healthcare Insurance Claims Dashboard | Adwaith Kalugotla</title>
        <meta
          name="description"
          content="Power BI dashboard that analyzes healthcare insurance customers and claim behavior using interactive visuals, KPIs, and DAX measures."
        />
      </Head>

      <main className="py-20 px-4 md:px-16 lg:px-32 bg-white dark:bg-gray-900 space-y-12">
        <section>
          <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Healthcare Insurance Claims Dashboard
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            This Power BI project explores healthcare insurance customers and
            their claim behavior. The goal is to give underwriters and business
            stakeholders a clear, interactive way to understand which customer
            segments are driving claim costs and how lifestyle factors such as
            BMI and smoking status affect risk.
          </p>
        </section>

        {/* Call-to-action buttons */}
        <section className="flex flex-wrap gap-4">
          <Link
            href="/InsuranceClaimsDashboard.pbix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-secondary transition"
          >
            Download Power BI File (.pbix) ↗
          </Link>

          {/* If you later add a PDF export, just change the href */}
          <Link
            href="/Healthcare_Insurance_Claims_Dashboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
          >
            View Dashboard PDF ↗
          </Link>
        </section>

        {/* Summary & insights */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              What the dashboard shows
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Total number of insured customers and total claim amount.</li>
              <li>
                Average claim amount by age group, BMI category, and smoker
                status.
              </li>
              <li>
                Comparison of claim frequency and severity for smokers vs
                non-smokers.
              </li>
              <li>
                Segmentation of customers by region, gender, and policy
                attributes.
              </li>
              <li>
                Slice-and-dice capabilities with interactive filters to answer
                ad-hoc business questions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              My role & implementation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Cleaned and transformed the raw CSV data in Power Query.</li>
              <li>
                Modeled relationships between customer, policy, and claims
                tables.
              </li>
              <li>
                Built DAX measures for KPIs such as total claims, average claim
                amount, and claim ratio per segment.
              </li>
              <li>
                Designed a layout that keeps KPIs on top with drill-down visuals
                below for exploration.
              </li>
            </ul>
          </div>
        </section>

        {/* Screenshot */}
        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Dashboard Preview
          </h2>
          <div className="relative max-w-4xl rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-800">
            <Image
              src="/images/healthcare_dashboard.png"
              alt="Healthcare Insurance Claims Power BI dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Tech stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Microsoft Power BI (data model, visuals, DAX).</li>
            <li>Power Query for data cleaning and shaping.</li>
            <li>Excel / CSV as source data.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
