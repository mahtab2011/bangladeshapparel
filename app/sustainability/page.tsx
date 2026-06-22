export default function SustainabilityPage() {
  const pillars = [
    {
      title: "Effluent Treatment Plant",
      description:
        "Promoting responsible wastewater management through ETP adoption, cleaner dyeing processes and safer discharge practices for textile and washing units.",
    },
    {
      title: "Waste Recycling",
      description:
        "Converting cutting waste, fabric scraps and rejected materials into reusable textile products, handmade items and value-added local products.",
    },
    {
      title: "Cradle-to-Cradle Production",
      description:
        "Building a circular apparel model where waste from one process becomes raw material for another process, reducing landfill and increasing local income.",
    },
    {
      title: "Women-Led Green Enterprise",
      description:
        "Creating income opportunities for women and vulnerable groups through recycled textile crafts, handmade tapestry, blankets and home-based production.",
    },
  ];

  const villageModel = [
    "Garment waste collection",
    "Sorting and cleaning",
    "Yarn and fibre recovery",
    "Handmade tapestry",
    "Blanket production",
    "Local sales and export craft market",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Sustainability & Circular Apparel Economy
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-green-100">
            A national sustainability model for Bangladesh apparel focusing on
            clean production, effluent treatment, textile waste recycling,
            cradle-to-cradle innovation and community-based income generation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">🌱</div>

              <h2 className="text-3xl font-bold text-green-700">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-green-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Pabna / Sirajganj Textile Recycling Village Concept
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            BangladeshApparel can promote a village-based recycling model in
            areas such as Pabna and Sirajganj, where garment waste and textile
            scraps can be converted into handmade tapestry, blankets, recycled
            yarn and locally used household textile products. This model can
            create income for women, unemployed youth, vulnerable families and
            rural artisan groups.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {villageModel.map((step) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-5 text-center font-semibold text-slate-700 shadow-sm"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Local Recycled Yarn Industry Development
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            A local recycled yarn cluster can be developed around textile waste
            recovery. Fabric scraps can be sorted, processed and converted into
            yarn or fibre inputs for low-cost blankets, rugs, mats, tapestry,
            insulation materials and other community-use textile products. This
            can reduce waste, lower raw material dependency and create a new
            rural micro-industry.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-emerald-800 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Development Impact
          </h2>

          <ul className="mt-6 space-y-3 text-lg text-emerald-50">
            <li>• Cleaner textile and washing operations through ETP awareness</li>
            <li>• Reduced landfill through textile waste recycling</li>
            <li>• New rural income stream from recycled textile products</li>
            <li>• Women-led home-based production and cooperative enterprise</li>
            <li>• Support for vulnerable groups through dignified work</li>
            <li>• Stronger ESG image for Bangladesh apparel exports</li>
          </ul>
        </section>
      </section>
    </main>
  );
}