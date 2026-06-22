export default function AccessoriesPage() {
  const accessories = [
    {
      name: "Button Manufacturers",
      category: "Buttons",
      location: "Dhaka / Gazipur",
      description: "Plastic, metal, horn and custom branded buttons.",
    },
    {
      name: "Zipper Suppliers",
      category: "Zippers",
      location: "Narayanganj / Chattogram",
      description: "Nylon, metal, invisible and heavy-duty zippers.",
    },
    {
      name: "Label & Hangtag Producers",
      category: "Labels",
      location: "Dhaka",
      description: "Woven labels, printed labels, care labels and hangtags.",
    },
    {
      name: "Packaging Suppliers",
      category: "Packaging",
      location: "Gazipur / Savar",
      description: "Cartons, poly bags, barcode stickers and export packaging.",
    },
    {
      name: "Thread & Sewing Input Suppliers",
      category: "Thread",
      location: "Dhaka / Cumilla",
      description: "Sewing thread, embroidery thread and industrial trims.",
    },
    {
      name: "Elastic & Drawcord Suppliers",
      category: "Elastic",
      location: "Narayanganj",
      description: "Elastic tapes, cords, drawstrings and waistband materials.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Bangladesh Accessories Manufacturers
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-slate-300">
            A sourcing gateway for garment accessories, trims, labels,
            packaging and export support materials manufactured in Bangladesh.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-900">
            Accessories & Trims Categories
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Bangladesh has a growing backward-linkage ecosystem supporting
            apparel exports through accessories, packaging and finishing inputs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">📦</div>

              <h3 className="text-2xl font-bold text-green-700">
                {item.name}
              </h3>

              <p className="mt-3 font-semibold text-slate-800">
                Category: {item.category}
              </p>

              <p className="mt-2 text-slate-700">
                Location: {item.location}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <button className="mt-6 rounded-2xl bg-green-700 px-6 py-3 font-bold text-white">
                View Suppliers
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}