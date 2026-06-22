export default function GreenFactoriesPage() {
  const leedStats = [
    { grade: "Platinum", count: "116", meaning: "Highest level of LEED recognition" },
    { grade: "Gold", count: "140", meaning: "Advanced green building performance" },
    { grade: "Silver", count: "15", meaning: "Recognised sustainable building performance" },
    { grade: "Certified", count: "4", meaning: "LEED certified green building standard" },
  ];

  const greenPractices = [
    "Energy-efficient buildings",
    "Water conservation",
    "Effluent treatment plants",
    "Rainwater harvesting",
    "Solar energy adoption",
    "Natural light and ventilation",
    "Waste reduction",
    "Worker-friendly green workplaces",
  ];

  const sampleFactories = [
    {
      name: "MNR Sweaters Ltd.",
      location: "Gazipur",
      product: "Sweaters / Knitwear",
      grade: "Platinum",
    },
    {
      name: "Hams Garments Ltd.",
      location: "Bangladesh",
      product: "Garments",
      grade: "Platinum",
    },
    {
      name: "Vintage Denim Studio Ltd.",
      location: "Pabna EPZ",
      product: "Denim",
      grade: "Platinum",
    },
    {
      name: "Genesis Washing Ltd.",
      location: "Gazipur",
      product: "Washing / Apparel Processing",
      grade: "Platinum",
    },
    {
      name: "Sample Green Knit Factory",
      location: "Narayanganj",
      product: "Knitwear",
      grade: "Gold",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Bangladesh Green Factory Revolution
          </h1>

          <p className="mt-6 max-w-5xl text-xl text-green-100">
            Bangladesh has become a global leader in LEED-certified green
            garment factories, demonstrating long-term sustainability,
            environmental responsibility and buyer-focused ESG readiness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <section className="rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            LEED-Certified Factory Leadership
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            Recent industry updates report that Bangladesh has 275
            LEED-certified RMG factories, including 116 Platinum, 140 Gold,
            15 Silver and 4 Certified facilities. Bangladesh is also reported
            to host around 70 of the world's top 100 highest-rated LEED
            factories.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {leedStats.map((item) => (
              <div
                key={item.grade}
                className="rounded-3xl bg-green-50 p-6 text-center shadow-sm"
              >
                <h3 className="text-5xl font-extrabold text-green-800">
                  {item.count}
                </h3>

                <p className="mt-3 text-2xl font-bold text-slate-900">
                  {item.grade}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Green Manufacturing Practices
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {greenPractices.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-emerald-50 p-5 text-center font-semibold text-emerald-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Example LEED Green Factory Table
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            This sample table can later be expanded into a verified searchable
            directory of LEED-certified apparel and textile factories.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="p-4 text-left">Factory</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Product / Specialisation</th>
                  <th className="p-4 text-left">LEED Grade</th>
                </tr>
              </thead>

              <tbody>
                {sampleFactories.map((factory) => (
                  <tr key={factory.name} className="border-t">
                    <td className="p-4 font-semibold">{factory.name}</td>
                    <td className="p-4">{factory.location}</td>
                    <td className="p-4">{factory.product}</td>
                    <td className="p-4 font-bold text-green-700">
                      {factory.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-green-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Why Green Factories Matter
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            LEED-certified green factories reduce energy use, conserve water,
            improve working conditions, support responsible wastewater
            management and strengthen Bangladesh's position as a preferred
            sourcing destination for sustainability-conscious global brands.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-emerald-900 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Long-Term Sustainability Vision
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-emerald-100">
            Bangladesh can build on its green factory leadership to become the
            world's most sustainable apparel manufacturing hub, combining LEED
            buildings, circular textile recycling, worker welfare, renewable
            energy, cleaner production and community-based green enterprise.
          </p>
        </section>
      </section>
    </main>
  );
}