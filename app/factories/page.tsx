export default function FactoriesPage() {
  const factories = [
    {
      name: "Dhaka Knitwear Ltd.",
      category: "Knitwear",
      location: "Gazipur",
      capacity: "500,000 pcs/month",
    },
    {
      name: "Bangladesh Denim Industries",
      category: "Denim",
      location: "Narayanganj",
      capacity: "300,000 pcs/month",
    },
    {
      name: "Green Fashion Apparel",
      category: "Woven Garments",
      location: "Ashulia",
      capacity: "450,000 pcs/month",
    },
    {
      name: "Premium Sportswear Ltd.",
      category: "Sportswear",
      location: "Chattogram",
      capacity: "250,000 pcs/month",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-5xl font-extrabold">
            Bangladesh Factory Directory
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Find garment manufacturers across Bangladesh.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2">

          {factories.map((factory) => (
            <div
              key={factory.name}
              className="rounded-3xl bg-white p-8 shadow"
            >
              <div className="mb-4 text-5xl">
                🏭
              </div>

              <h2 className="text-3xl font-bold text-green-700">
                {factory.name}
              </h2>

              <p className="mt-3">
                Category: {factory.category}
              </p>

              <p>
                Location: {factory.location}
              </p>

              <p>
                Capacity: {factory.capacity}
              </p>

              <button className="mt-6 rounded-2xl bg-green-700 px-6 py-3 font-bold text-white">
                View Profile
              </button>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}