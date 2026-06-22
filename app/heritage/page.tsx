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
      title: "Handloom Intelligence",
      description:
        "Traditional Bengali weaving often followed highly structured design logic, pattern memory and repeat systems that can be understood as an early form of algorithmic craftsmanship.",
    },
    {
      title: "Modern Apparel Transformation",
      description:
        "Bangladesh has transformed from a historic textile civilisation into one of the world's leading apparel manufacturing hubs.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-amber-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Bangladesh Textile Heritage
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-amber-100">
            From muslin and Jamdani to modern export apparel, Bangladesh carries
            a centuries-old textile legacy of craftsmanship, design intelligence
            and global trade.
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
            Bangladesh is not only a low-cost manufacturing destination. It is a
            textile nation with deep historical knowledge, skilled hands,
            production discipline and an evolving industrial base. This heritage
            can strengthen the national apparel brand and support premium,
            sustainable and design-led sourcing.
          </p>
        </section>
      </section>
    </main>
  );
}