export default function HighValueInvestmentPage() {
  const opportunities = [
    "Premium outerwear",
    "High-value denim",
    "Sportswear and athleisure",
    "Technical apparel",
    "Workwear and uniforms",
    "Lingerie and intimate wear",
    "Sustainable branded apparel",
    "Design-led boutique production",
  ];

  const incentives = [
    "Export-oriented industrial policy support",
    "Bonded warehouse facilities",
    "Export processing zone opportunities",
    "Special economic zone opportunities",
    "Duty and tax facilities subject to policy",
    "Support for foreign direct investment",
    "Backward linkage industry development",
    "Green factory and sustainability positioning",
  ];

  const workforceStrengths = [
    "Large trainable workforce",
    "Strong women worker participation",
    "Experience in global buyer compliance",
    "Fast learning capacity",
    "Production discipline",
    "Ability to upgrade into premium manufacturing",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Investment in High-Value Branded Apparel
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-green-100">
            Bangladesh has the potential to move from volume manufacturing to
            higher-value branded, technical, sustainable and design-led apparel
            production through investment, training, technology and factory
            upgrading.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <section className="rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Government Incentive Environment
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Bangladesh has long supported export-oriented industrial growth
            through investment facilitation, export policy support, economic
            zones, export processing zones, bonded warehouse systems and
            facilities for export-focused manufacturing. Specific incentives
            are subject to government policy, sector, location and investment
            structure.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {incentives.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-green-50 p-5 text-center font-semibold text-green-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            High-Value Product Opportunities
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {opportunities.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-100 p-5 text-center font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-blue-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-blue-800">
            Workforce Skill, Trainability and Women Participation
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Bangladesh's apparel workforce, particularly women workers, has
            demonstrated strong trainability, production discipline and
            adaptability to international buyer requirements. With structured
            training, technology support and better factory systems, this
            workforce can support higher-value products and premium branded
            manufacturing.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {workforceStrengths.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-center font-semibold text-blue-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-purple-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-purple-800">
            Upgrading Pathway
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              "Training",
              "Technology",
              "Design Capability",
              "Quality Systems",
              "Premium Branding",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-5 text-center font-bold text-purple-800 shadow-sm"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-green-800 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Strategic Message for Investors
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-green-100">
            Bangladesh is ready for the next phase of apparel growth: moving
            beyond basic volume production toward higher-value, sustainable,
            branded and technology-enabled manufacturing. Investment in people,
            skills, design, innovation and factory intelligence can unlock a
            new era for the Bangladesh apparel and textile sector.
          </p>
        </section>
      </section>
    </main>
  );
}