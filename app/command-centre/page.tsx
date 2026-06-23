import Link from "next/link";

const modules = [
  {
    title: "Executive Report Centre",
    href: "/executive-report-centre",
    description: "Strategic dashboard for BGMEA leadership and investors.",
  },
  {
    title: "BGMEA Command Centre",
    href: "/bgmea-dashboard",
    description: "Live buyer enquiries and factory lead tracking.",
  },
  {
    title: "Industry Analytics",
    href: "/industry-analytics",
    description: "Industry strength, sustainability, workforce, and exports.",
  },
  {
    title: "Factory Directory",
    href: "/factories",
    description: "Browse Bangladesh garment manufacturers.",
  },
  {
    title: "Factory Dashboard",
    href: "/factory-dashboard",
    description: "Factory enquiry inbox and lead management.",
  },
  {
    title: "Factory Comparison",
    href: "/factory-comparison",
    description: "Compare production capacity and sustainability.",
  },
  {
    title: "Buyer Country Intelligence",
    href: "/buyer-country-intelligence",
    description: "Country-wise buyer interest and demand analysis.",
  },
  {
    title: "Buyer Request Dashboard",
    href: "/admin-dashboard/buyer-requests",
    description: "Admin control of buyer enquiries and routing.",
  },
];

export default function CommandCentrePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href="/"
            className="font-bold text-green-100"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-5xl font-extrabold">
            Bangladesh Apparel Command Centre
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Executive navigation hub for BGMEA, buyers, investors,
            factory owners, and policymakers.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {modules.map((module) => (
            <Link
              key={module.title}
              href={module.href}
              className="rounded-3xl bg-white p-8 shadow hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {module.title}
              </h2>

              <p className="mt-4 text-slate-600">
                {module.description}
              </p>
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}