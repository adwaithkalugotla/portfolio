// pages/nypc-dashboard.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function NypcDashboard() {
  return (
    <>
      <Head>
        <title>NYPC Insurance Power BI Dashboard | Adwaith Kalugotla</title>
        <meta
          name="description"
          content="Power BI dashboard for the NYPC insurance dataset, focusing on premiums, risk segmentation, and company performance."
        />
      </Head>

      <main className="py-20 px-4 md:px-16 lg:px-32 bg-white dark:bg-gray-900 space-y-12">
        <section>
          <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            NYPC Insurance Dataset – Power BI Dashboard
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            This dashboard is built on the NYPC insurance dataset and is
            designed for executives and product managers who want a quick,
            high-level view of premium trends, company performance, and risk
            exposure. It highlights how interactive BI can replace static Excel
            reports for decision making.
          </p>
        </section>

        {/* Call-to-action buttons */}
        <section className="flex flex-wrap gap-4">
          <Link
            href="/NYPC_Dashboard.pbix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-secondary transition"
          >
            Download Power BI File (.pbix) ↗
          </Link>
        </section>

        {/* Summary & insights */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Key questions this dashboard answers
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>How are total premiums trending over time?</li>
              <li>
                Which companies contribute the most to written premiums and
                growth?
              </li>
              <li>
                What does the mix of net premiums vs written premiums look like
                by company or region?
              </li>
              <li>
                How are different product lines or segments performing compared
                to each other?
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              My role & implementation
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Imported and profiled the NYPC dataset in Power BI.</li>
              <li>
                Built a star-schema style model with company, date, and product
                dimensions.
              </li>
              <li>
                Created DAX measures for total premiums, growth %, and net
                premium ratios.
              </li>
              <li>
                Designed an executive-friendly layout with KPIs at the top and
                drill-down visuals below.
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
              src="/images/nypc-insurance-dash.png"
              alt="NYPC Insurance Power BI dashboard"
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
            <li>Power Query for data transformations.</li>
            <li>CSV/Excel NYPC dataset as the data source.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
