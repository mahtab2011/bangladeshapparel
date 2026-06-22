export default function InvestmentPage() {
  const reasons = [
    {
      title: "Global Apparel Hub",
      description:
        "Bangladesh is one of the world's largest apparel exporting nations with a strong manufacturing ecosystem and experienced workforce.",
    },
    {
      title: "Competitive Workforce",
      description:
        "Millions of skilled workers support the apparel, textile and accessories industries across the country.",
    },
    {
      title: "Integrated Supply Chain",
      description:
        "A growing network of textile mills, accessories suppliers, logistics providers and manufacturing facilities supports buyers worldwide.",
    },
    {
      title: "Sustainability Leadership",
      description:
        "Bangladesh hosts many of the world's highest-rated green garment factories and continues investing in sustainable production.",
    },
    {
      title: "Innovation & Digitalisation",
      description:
        "Industry leaders are increasingly adopting AI, factory intelligence, Industry 4.0 and smart manufacturing technologies.",
    },
    {
      title: "Strategic Growth Potential",
      description:
        "Opportunities exist in textiles, recycling, technical textiles, accessories, logistics and manufacturing technology.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-emerald-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Bangladesh Apparel & Textile Sector
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-emerald-100">
            Discover investment opportunities across apparel manufacturing,
            textiles, accessories, recycling, innovation and sustainable
            industrial development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">📈</div>

              <h2 className="text-3xl font-bold text-emerald-800">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            High-Potential Investment Areas
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Textile Mills",
              "Accessories Manufacturing",
              "Recycling Industry",
              "Technical Textiles",
              "Industrial Automation",
              "AI Manufacturing Solutions",
              "Logistics",
              "Warehousing",
              "Export Infrastructure",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-emerald-50 p-5 text-center font-semibold text-emerald-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-green-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Rural Industrial Development
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Significant opportunities exist for rural textile clusters,
            recycling villages, women-led enterprises, yarn recovery projects,
            handmade textile products and sustainable community-based
            manufacturing initiatives.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-emerald-800 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Bangladesh Apparel & Textile Sector Vision 2035
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-emerald-100">
            A globally respected apparel ecosystem combining sustainability,
            innovation, worker welfare, manufacturing excellence and inclusive
            economic growth.
          </p>
        </section>
      </section>
    </main>
  );
}