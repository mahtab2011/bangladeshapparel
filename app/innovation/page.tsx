export default function InnovationPage() {
  const innovations = [
    {
      title: "Artificial Intelligence",
      description:
        "AI-driven forecasting, quality prediction, risk monitoring and manufacturing intelligence for apparel factories.",
    },
    {
      title: "Smart Factories",
      description:
        "Connected production systems, real-time visibility and data-driven decision making across factory operations.",
    },
    {
      title: "Industry 4.0",
      description:
        "Digital transformation through automation, sensors, analytics and intelligent manufacturing systems.",
    },
    {
      title: "Lean Manufacturing",
      description:
        "Continuous improvement, waste elimination and productivity enhancement through lean methodologies.",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Using machine data and analytics to reduce breakdowns and improve equipment reliability.",
    },
    {
      title: "Energy Efficiency",
      description:
        "Reducing energy consumption through monitoring, optimization and sustainable manufacturing practices.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-purple-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Innovation & Smart Manufacturing
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-purple-100">
            Building the future of Bangladesh apparel through artificial
            intelligence, Industry 4.0, lean manufacturing and digital factory
            intelligence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {innovations.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">🚀</div>

              <h2 className="text-3xl font-bold text-purple-800">
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
            MBNCON Manufacturing Intelligence
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            MBNCON provides factory intelligence solutions including production
            monitoring, profitability analysis, buyer risk assessment,
            productivity improvement, bottleneck analysis, predictive
            maintenance, executive dashboards and AI-powered decision support
            systems.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-purple-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-purple-800">
            Future Vision
          </h2>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• AI-assisted production planning</li>
            <li>• Digital twins for factories</li>
            <li>• Automated quality inspection</li>
            <li>• Real-time executive dashboards</li>
            <li>• Smart energy management</li>
            <li>• Predictive maintenance systems</li>
            <li>• Factory-wide manufacturing intelligence</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl bg-purple-800 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Bangladesh Apparel 2035
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-purple-100">
            Bangladesh can become the world's leading smart apparel
            manufacturing destination by combining skilled people, sustainable
            production, digital technology, artificial intelligence and
            manufacturing excellence.
          </p>
        </section>
      </section>
    </main>
  );
}