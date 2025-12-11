// pages/projects.tsx
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Adwaith Kalugotla</title>
      </Head>

      <section className="py-20 px-4 md:px-16 lg:px-32">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* SPEAKBUDDY APP */}
          <ProjectCard
            title="SpeakBuddy"
            image="/images/userdetails.jpg"
            href="/speakbuddy"
            bullets={[
              "NSDA-compliant per-round debate timing",
              "Google Speech-to-Text + Whisper API",
              "GPT-powered debate judging and scoring",
            ]}
          />

          {/* STOCK PRICE PREDICTOR */}
          <ProjectCard
            title="Stock Price Predictor"
            image="/images/homepagestock.png"
            href="/stockpricepredictor"
            bullets={[
              "Predict up to 4 stock trends at once",
              "Volatility, SMA & Bollinger Bands computation",
              "Python ML backend with Flask API",
            ]}
          />

          {/* HEALTHCARE INSURANCE CLAIMS DASHBOARD */}
          <ProjectCard
            title="Healthcare Insurance Claims Dashboard"
            image="/images/healthcare_dashboard.png"
            href="/healthcare-dashboard"
            bullets={[
              "Interactive Power BI dashboard analyzing customer claim behavior",
              "KPIs: claim amount, BMI, smoker status, customer demographics",
              "Built with Power BI, Excel preprocessing & DAX measures",
            ]}
          />

          {/* NYPC INSURANCE DASHBOARD */}
          <ProjectCard
            title="NYPC Insurance Dataset – Power BI Dashboard"
            image="/images/nypc-insurance-dash.png"
            href="/nypc-dashboard"
            bullets={[
              "Full Power BI data model with relationships and custom DAX",
              "Risk segmentation & premium analysis with drill-downs",
              "Clean dashboard layout with KPI cards & slicers",
            ]}
          />
        </div>
      </section>
    </>
  );
}
