export default function HeritagePage() {
  const heritagePoints = [
    {
      title: "Muslin Legacy",
      description:
        "Bengal was historically known for producing some of the finest muslin fabrics in the world, admired for delicacy, craftsmanship and global trade value.",
    },
    {
      title: "Jamdani Craftsmanship",
      description:
        "Jamdani weaving represents one of Bangladesh's most sophisticated textile traditions, combining artistic design with skilled handloom execution.",
    },
    {
      title: "Textile Algorithms & Early Programmable Logic",
      description:
        "Long before modern computers, Bengal's weaving traditions used structured pattern systems, thread sequencing, colour control, and repeat logic to create complex designs. At its most fundamental level, weaving operates through binary decisions — threads are raised or lowered to create patterns. Similar concepts later influenced programmable textile machinery such as the Jacquard loom, whose punched-card control systems became one of the historical inspirations for early computing.",
    },
    {
      title: "Modern Apparel Transformation",
      description:
        "Bangladesh has transformed from a historic textile civilisation into one of the world's leading apparel manufacturing hubs, serving global buyers through scale, skill, compliance and production discipline.",
    },
    {
      title: "From Handloom to Industry 4.0",
      description:
        "Bangladesh's textile journey now spans from ancient handloom craftsmanship to AI-assisted manufacturing, sustainability leadership, digital supply chains, and advanced apparel production serving more than 150 global markets.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-amber-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Bangladesh Textile Heritage
          </h1>

          <p className="mt-6 max-w-5xl text-xl text-amber-100">
            Many people associate algorithms only with computers. However, long
            before digital computers existed, textile production used structured
            instruction systems to control patterns, colours, and thread
            movements. The textile industry was one of the inspirations behind
            programmable machines and ultimately modern computing. Bangladesh
            inherits part of that remarkable textile tradition through Muslin,
            Jamdani, and centuries of weaving excellence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {heritagePoints.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">🧵</div>

              <h2 className="text-3xl font-bold text-amber-800">
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
            Why Heritage Matters for Modern Buyers
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            Bangladesh is not only a competitive manufacturing destination. It
            is a textile nation with deep historical knowledge, skilled hands,
            production discipline, design intelligence and an evolving
            industrial base. This heritage can strengthen the national apparel
            brand and support premium, sustainable, technology-enabled and
            design-led sourcing.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-amber-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-amber-900">
            Bangladesh's Continuing Legacy
          </h2>

          <ul className="mt-6 space-y-3 leading-8 text-slate-700">
            <li>• Muslin — one of history's finest textiles</li>
            <li>• Jamdani — globally recognized weaving heritage</li>
            <li>• Handloom intelligence — structured pattern logic and craftsmanship</li>
            <li>• Green manufacturing — sustainability-led apparel production</li>
            <li>• Digital transformation — AI, analytics and Industry 4.0 readiness</li>
            <li>• Global exports — serving more than 150 international markets</li>
          </ul>
        </section>
      </section>
    </main>
  );
}