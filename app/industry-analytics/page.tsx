import Link from "next/link";

export default function IndustryAnalyticsPage() {
  const categories = [
    { name: "Knitwear", factories: 1800 },
    { name: "Woven", factories: 1200 },
    { name: "Denim", factories: 350 },
    { name: "Sweaters", factories: 500 },
    { name: "Sportswear", factories: 300 },
    { name: "Workwear", factories: 200 },
  ];

  const markets = [
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Canada",
    "Japan",
    "Australia",
    "Netherlands",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            href="/"
            className="font-bold text-green-100"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-5xl font-extrabold">
            Bangladesh Apparel Industry Analytics
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Industry intelligence, sustainability leadership, export reach,
            and manufacturing strength.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow">
            <div className="text-5xl font-extrabold text-green-700">
              4,500+
            </div>
            <p className="mt-3 font-semibold">
              Factories
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <div className="text-5xl font-extrabold text-green-700">
              4M+
            </div>
            <p className="mt-3 font-semibold">
              Workforce
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <div className="text-5xl font-extrabold text-green-700">
              150+
            </div>
            <p className="mt-3 font-semibold">
              Export Markets
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <div className="text-5xl font-extrabold text-green-700">
              260+
            </div>
            <p className="mt-3 font-semibold">
              LEED Factories
            </p>
          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">

        <h2 className="mb-8 text-4xl font-bold">
          Product Category Distribution
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl bg-white p-8 shadow"
            >
              <h3 className="text-2xl font-bold text-green-700">
                {category.name}
              </h3>

              <p className="mt-4 text-4xl font-extrabold">
                {category.factories}
              </p>

              <p className="mt-2 text-slate-600">
                Estimated factories
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">

        <h2 className="mb-8 text-4xl font-bold">
          Sustainability Leadership
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold text-green-700">
              LEED Platinum
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold text-green-700">
              LEED Gold
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold text-green-700">
              LEED Silver
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-2xl font-bold text-green-700">
              ETP Compliance
            </h3>
          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          Major Export Markets
        </h2>

        <div className="grid gap-4 md:grid-cols-5">

          {markets.map((market) => (
            <div
              key={market}
              className="rounded-2xl bg-white p-5 shadow text-center font-semibold"
            >
              {market}
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}