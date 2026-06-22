import Link from "next/link";

export default function EcosystemPage() {
  const modules = [
    {
      title: "Factory Directory",
      icon: "🏭",
      href: "/factories",
      description: "Garment manufacturers across Bangladesh",
    },
    {
      title: "Textile Mills",
      icon: "🧵",
      href: "/textile-mills",
      description: "Fabric, yarn and textile producers",
    },
    {
      title: "Accessories",
      icon: "📦",
      href: "/accessories",
      description: "Buttons, zippers, labels, packaging",
    },
    {
      title: "Buyer Centre",
      icon: "🌎",
      href: "/buyer-centre",
      description: "International sourcing and enquiries",
    },
    {
      title: "Bangladesh Heritage",
      icon: "🏛️",
      href: "/heritage",
      description: "Muslin, Jamdani and textile history",
    },
    {
      title: "About Bangladesh",
      icon: "🇧🇩",
      href: "/about-bangladesh",
      description: "Country profile and investment information",
    },
    {
      title: "Sustainability",
      icon: "🌱",
      href: "/sustainability",
      description: "Green factories and ESG initiatives",
    },
    {
      title: "BGMEA Dashboard",
      icon: "📊",
      href: "/bgmea-dashboard",
      description: "Industry statistics and analytics",
    },
    {
      title: "MBNCON AI",
      icon: "🤖",
      href: "/mbncon",
      description: "Factory intelligence and productivity",
    },
    {
      title: "Sourcing Request",
      icon: "📝",
      href: "/sourcing-request",
      description: "Submit sourcing requirements",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-extrabold">
            Bangladesh Apparel Ecosystem
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-green-100">
            A complete digital ecosystem connecting
            garment factories, textile mills,
            accessories manufacturers, buyers and
            AI-powered factory intelligence.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((module) => (
            <Link
              key={module.title}
              href={module.href}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-6xl">
                {module.icon}
              </div>

              <h2 className="text-3xl font-bold text-green-700">
                {module.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {module.description}
              </p>
            </Link>
          ))}

        </div>

      </section>
    </main>
  );
}