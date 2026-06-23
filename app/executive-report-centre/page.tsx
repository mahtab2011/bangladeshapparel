import Link from "next/link";

export default function ExecutiveReportCentrePage() {
  const alerts = [
    "UK buyer interest increasing this month",
    "Knitwear remains the highest demand category",
    "ABC Knitwear Ltd. received new buyer lead",
    "BangladeshApparel buyer enquiries continue to grow",
  ];

  const recommendations = [
    "Increase promotion of Knitwear products in the UK market",
    "Highlight LEED-certified factories in marketing campaigns",
    "Expand Denim promotion in Europe",
    "Encourage more factories to complete digital profiles",
  ];

  const modules = [
    {
      title: "BGMEA Command Centre",
      href: "/bgmea-dashboard",
    },
    {
      title: "Industry Analytics",
      href: "/industry-analytics",
    },
    {
      title: "Factory Directory",
      href: "/factories",
    },
    {
      title: "Factory Comparison",
      href: "/factory-comparison",
    },
    {
      title: "Buyer Country Intelligence",
      href: "/buyer-country-intelligence",
    },
    {
      title: "Factory Dashboard",
      href: "/factory-dashboard",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="font-semibold text-green-700"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Executive Report Centre
        </h1>

        <p className="mt-3 text-gray-600">
          Strategic dashboard for BGMEA leadership, investors,
          policymakers, and industry executives.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-5">

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl font-extrabold text-green-700">
              4,500+
            </div>
            <p className="mt-2 font-semibold">
              Factories
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl font-extrabold text-green-700">
              2
            </div>
            <p className="mt-2 font-semibold">
              Buyer Enquiries
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl font-extrabold text-green-700">
              1
            </div>
            <p className="mt-2 font-semibold">
              Forwarded Leads
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl font-extrabold text-green-700">
              1
            </div>
            <p className="mt-2 font-semibold">
              Countries Reached
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="text-4xl font-extrabold text-green-700">
              1
            </div>
            <p className="mt-2 font-semibold">
              Product Categories
            </p>
          </div>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-green-800">
              Executive Alerts
            </h2>

            <ul className="mt-6 space-y-4">
              {alerts.map((alert) => (
                <li
                  key={alert}
                  className="rounded-xl bg-slate-50 p-4"
                >
                  {alert}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-green-800">
              Executive Recommendations
            </h2>

            <ul className="mt-6 space-y-4">
              {recommendations.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-slate-50 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold text-green-800">
            Executive Navigation
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            {modules.map((module) => (
              <Link
                key={module.title}
                href={module.href}
                className="rounded-2xl border p-5 font-semibold hover:bg-green-50"
              >
                {module.title}
              </Link>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}