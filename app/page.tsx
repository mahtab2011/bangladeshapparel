import Link from "next/link";
import LanguageSelector from "./components/LanguageSelector";

export default function HomePage() {
  const categories = [
    "Knitwear",
    "Woven Garments",
    "Denim",
    "Outerwear",
    "Sportswear",
    "Sweaters",
    "Lingerie",
    "Workwear",
  ];

  const accessories = [
    "Buttons",
    "Zippers",
    "Labels",
    "Elastic",
    "Packaging",
    "Cartons",
    "Poly Bags",
    "Thread",
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-4 text-lg font-semibold uppercase tracking-widest">
            Bangladesh Apparel Industry Portal
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            Connecting Global Buyers,
            Bangladesh Manufacturers
            and AI-Powered Factory Intelligence
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-green-100">
            Discover garment manufacturers, textile mills,
            accessories suppliers, sourcing partners and
            intelligent factory solutions from Bangladesh.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/factories"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-green-700"
            >
              Browse Factories
            </Link>

            <Link
              href="/buyer-centre"
              className="rounded-2xl border border-white px-8 py-4 font-bold text-white"
            >
              Buyer Centre
            </Link>
            <Link
  href="/factory-signup"
  className="rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-900"
>
  Register Your Factory
</Link>
          </div>
        </div>
      </section>
<section className="mx-auto max-w-7xl px-6 py-8">
  <LanguageSelector />
</section>
<section className="mx-auto max-w-7xl px-6 py-10">
  <div className="rounded-3xl bg-white p-6 shadow-xl">
    <h2 className="text-3xl font-bold text-slate-900">
      Search Bangladesh Apparel Suppliers
    </h2>

    <p className="mt-2 text-slate-600">
      Find factories by product, location, certification, capacity or buyer requirement.
    </p>

    <div className="mt-6 grid gap-4 md:grid-cols-4">
      <input
        className="rounded-2xl border p-4"
        placeholder="Search product e.g. T-shirt, Denim"
      />

      <input
        className="rounded-2xl border p-4"
        placeholder="Factory location"
      />

      <select className="rounded-2xl border p-4">
        <option>Certification</option>
        <option>WRAP</option>
        <option>BSCI</option>
        <option>SEDEX</option>
        <option>LEED</option>
        <option>OEKO-TEX</option>
      </select>

      <Link
        href="/factories"
        className="rounded-2xl bg-green-700 p-4 text-center font-bold text-white"
      >
        Search Factories
      </Link>
    </div>
  </div>
</section>
      {/* INDUSTRY STATS */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Bangladesh Apparel Industry
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">
              4,500+
            </h3>
            <p className="mt-3 text-lg">
              Export Factories
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">
              $47B+
            </h3>
            <p className="mt-3 text-lg">
              Annual Exports
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">
              4M+
            </h3>
            <p className="mt-3 text-lg">
              Workforce
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">
              150+
            </h3>
            <p className="mt-3 text-lg">
              Export Markets
            </p>
          </div>

        </div>
      </section>

<section className="mx-auto max-w-7xl px-6 py-16">
  <h2 className="mb-10 text-4xl font-bold">
    What Factories Can Do
  </h2>

  <div className="grid gap-6 md:grid-cols-4">
    {[
      "Create Factory Profile",
      "Upload Photos & Videos",
      "Show Certificates",
      "Receive Buyer Inquiries",
      "Track Profile Visitors",
      "Show Production Capacity",
      "Promote Product Categories",
      "Build Export Credibility",
    ].map((item) => (
      <div
        key={item}
        className="rounded-3xl bg-white p-8 shadow"
      >
        <div className="mb-4 text-5xl">✅</div>
        <h3 className="text-xl font-bold">{item}</h3>
      </div>
    ))}
  </div>
</section>
      {/* FACTORY CATEGORIES */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-10 text-4xl font-bold">
            Factory Categories
          </h2>

          <div className="grid gap-6 md:grid-cols-4">

            {categories.map((item) => (
              <div
                key={item}
                className="rounded-3xl border bg-slate-50 p-8 shadow-sm"
              >
                <div className="mb-4 text-5xl">
                  🏭
                </div>

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ACCESSORIES */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="mb-10 text-4xl font-bold">
          Accessories Ecosystem
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          {accessories.map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-8 shadow"
            >
              <div className="mb-4 text-5xl">
                📦
              </div>

              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* BUYER CENTRE */}

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-6 text-4xl font-bold">
            Global Buyer Centre
          </h2>

          <p className="max-w-4xl text-lg text-slate-700">
            International buyers can search factories,
            submit sourcing enquiries, discover product
            categories and connect directly with verified
            Bangladesh suppliers.
          </p>

        </div>
      </section>

      {/* HERITAGE */}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-6 text-4xl font-bold">
            Bangladesh Textile Heritage
          </h2>

          <p className="max-w-5xl text-lg text-slate-700">
            Bangladesh possesses one of the world's oldest
            textile traditions. From muslin and handloom
            weaving to modern sustainable manufacturing,
            the country continues a centuries-old legacy
            of craftsmanship, innovation and global trade.
          </p>

        </div>
      </section>

      {/* MBNCON */}

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-6 text-4xl font-bold">
            AI Factory Intelligence by MBNCON
          </h2>

          <p className="max-w-4xl text-lg text-slate-300">
            Factory profitability, productivity,
            bottleneck analysis, forecasting,
            operational excellence and executive
            intelligence dashboards.
          </p>

        </div>
      </section>

      {/* FOOTER */}

      <section className="bg-green-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold">
            BangladeshApparel.com
          </h2>

          <p className="mt-3">
            Connecting Bangladesh Apparel Industry
            with Global Markets.
          </p>

        </div>
      </section>

    </main>
  );
}