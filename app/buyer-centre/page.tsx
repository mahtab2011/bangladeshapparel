export default function BuyerCentrePage() {
  const buyerNeeds = [
    "Knitwear sourcing",
    "Woven garment sourcing",
    "Denim manufacturing",
    "Sportswear production",
    "Sustainable apparel",
    "Factory compliance support",
    "Accessories sourcing",
    "Bulk production enquiry",
  ];

  const sourcingSteps = [
    "Submit buyer enquiry",
    "Select product category",
    "Mention order quantity",
    "Add fabric and compliance requirements",
    "Share target price and shipment date",
    "Match with suitable factories",
    "Receive supplier responses",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Global Buyer Centre
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-green-100">
            A digital sourcing gateway for international buyers looking for
            verified Bangladesh apparel factories, accessories suppliers and
            export-ready manufacturing partners.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-3xl font-bold text-green-700">
              Buyer Enquiry Form
            </h2>

            <div className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-slate-300 px-5 py-4"
                placeholder="Company Name"
              />

              <input
                className="rounded-2xl border border-slate-300 px-5 py-4"
                placeholder="Buyer Country"
              />

              <input
                className="rounded-2xl border border-slate-300 px-5 py-4"
                placeholder="Product Category"
              />

              <input
                className="rounded-2xl border border-slate-300 px-5 py-4"
                placeholder="Estimated Order Quantity"
              />

              <input
                className="rounded-2xl border border-slate-300 px-5 py-4"
                placeholder="Target Shipment Date"
              />

              <textarea
                className="min-h-32 rounded-2xl border border-slate-300 px-5 py-4"
                placeholder="Product details, fabric, compliance requirement, target price..."
              />

              <button className="rounded-2xl bg-green-700 px-6 py-4 font-bold text-white">
                Submit Sourcing Request
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-green-50 p-8 shadow">
            <h2 className="text-3xl font-bold text-green-800">
              What Buyers Can Source
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {buyerNeeds.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Alibaba-Style Buyer Matching Flow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-7">
            {sourcingSteps.map((step) => (
              <div
                key={step}
                className="rounded-2xl bg-slate-100 p-5 text-center font-semibold text-slate-700"
              >
                {step}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}