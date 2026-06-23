import Link from "next/link";

const sustainabilityData = [
  {
    title: "LEED Platinum Factories",
    count: 5,
    description:
      "Factories operating at the highest international sustainability standards.",
  },
  {
    title: "LEED Gold Factories",
    count: 12,
    description:
      "Factories demonstrating strong environmental performance.",
  },
  {
    title: "Renewable Energy Users",
    count: 8,
    description:
      "Factories using solar and renewable energy solutions.",
  },
  {
    title: "Water Recycling Facilities",
    count: 10,
    description:
      "Factories recycling industrial water for sustainable production.",
  },
];

export default function SustainabilityCentrePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="font-semibold text-green-700"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-5xl font-extrabold text-green-800">
          Sustainability Centre
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Bangladesh Apparel sustainability, green manufacturing,
          environmental compliance, and responsible production overview.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sustainabilityData.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow"
            >
              <div className="text-5xl font-extrabold text-green-700">
                {item.count}
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-green-700 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Sustainability Highlights
          </h2>

          <ul className="mt-6 space-y-3 text-lg">
            <li>✓ LEED Platinum, Gold & Silver Certified Factories</li>
            <li>✓ Energy Efficient Production Facilities</li>
            <li>✓ Renewable Energy Adoption</li>
            <li>✓ Water Recycling & Conservation</li>
            <li>✓ Environmental Compliance & ETP Systems</li>
            <li>✓ Responsible Manufacturing Practices</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Why Sustainability Matters
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Global buyers increasingly prioritize sustainability,
            carbon reduction, ethical sourcing, environmental compliance,
            and green manufacturing capabilities when selecting suppliers.
            Bangladesh Apparel provides visibility into these strengths
            to support export growth and international buyer confidence.
          </p>
        </div>

      </div>
    </main>
  );
}