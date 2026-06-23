import Link from "next/link";

const factoryModules = [
  {
    title: "Factory Registration",
    href: "/factory-signup",
    icon: "🏭",
    description:
      "Create or update factory profile information for buyer visibility.",
  },
  {
    title: "Photos & Videos",
    href: "/factory-signup",
    icon: "📷",
    description:
      "Upload factory photos, product images, management photos and production videos.",
  },
  {
    title: "Certificates",
    href: "/factory-signup",
    icon: "📜",
    description:
      "Show BGMEA, BKMEA, LEED, WRAP, BSCI, SEDEX and other compliance records.",
  },
  {
    title: "Production Capacity",
    href: "/factory-dashboard",
    icon: "🏗️",
    description:
      "Display monthly production capacity, machinery, workforce and product strengths.",
  },
  {
    title: "Buyer Leads",
    href: "/factory-dashboard",
    icon: "🤝",
    description:
      "View buyer enquiries forwarded to the factory by Bangladesh Apparel administrators.",
  },
  {
    title: "Buyer Lead Pipeline",
    href: "/buyer-lead-centre",
    icon: "📈",
    description:
      "Track buyer leads from enquiry to factory contact, quotation, sample and order.",
  },
  {
    title: "Product Categories",
    href: "/product-categories",
    icon: "🧥",
    description:
      "Manage product categories including knitwear, woven, denim, sweaters and accessories.",
  },
  {
    title: "Factory Directory Profile",
    href: "/factories/demo-factory",
    icon: "🌍",
    description:
      "Preview how factory profiles appear to international buyers.",
  },
  {
    title: "Sustainability Profile",
    href: "/sustainability-centre",
    icon: "🌱",
    description:
      "Show LEED certification, ETP systems, renewable energy initiatives, water management, waste recycling programmes and participation in Bangladesh's circular textile economy including recycling clusters in Pabna and Sirajganj.",
  },
];

export default function FactoryCentrePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/" className="font-bold text-green-100">
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-5xl font-extrabold">
            Factory Centre
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-green-100">
            Private factory management area for profile creation, certificates,
            production capacity, sustainability, buyer leads and export readiness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {factoryModules.map((module) => (
            <Link
              key={module.title}
              href={module.href}
              className="rounded-3xl bg-white p-8 shadow hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{module.icon}</div>

              <h2 className="text-2xl font-bold text-green-800">
                {module.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {module.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Role-Based Access Note
          </h2>

         <p className="mt-4 max-w-5xl leading-8 text-slate-700">
  In the full production system, this Factory Centre will be available
  only to approved factories, BGMEA administrators and authorised
  industry managers. The public website will remain focused on buyers,
  investors and Bangladesh apparel promotion. Future modules will
  include buyer communication, AI-assisted translation, sustainability
  reporting, recycling participation tracking, export intelligence and
  factory performance analytics.
</p>
        </div>
      </section>
    </main>
  );
}