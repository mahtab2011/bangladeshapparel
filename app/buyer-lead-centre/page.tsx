import Link from "next/link";

const pipeline = [
  {
    stage: "New Enquiries",
    count: 2,
    description: "Buyer enquiries received through the platform.",
  },
  {
    stage: "Assigned To Factory",
    count: 1,
    description: "Enquiries forwarded by Bangladesh Apparel Admin.",
  },
  {
    stage: "Factory Contacted",
    count: 1,
    description: "Factory has reviewed and acknowledged enquiry.",
  },
  {
    stage: "Quotation Sent",
    count: 0,
    description: "Price quotation submitted to buyer.",
  },
  {
    stage: "Sample Sent",
    count: 0,
    description: "Development sample sent for approval.",
  },
  {
    stage: "Order Confirmed",
    count: 0,
    description: "Buyer confirmed commercial order.",
  },
];

export default function BuyerLeadCentrePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="font-semibold text-green-700"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-5xl font-extrabold text-green-800">
          Buyer Lead Pipeline Centre
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Track international buyer enquiries from sourcing request
          to confirmed export orders.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pipeline.map((item) => (
            <div
              key={item.stage}
              className="rounded-3xl bg-white p-8 shadow"
            >
              <div className="text-5xl font-extrabold text-green-700">
                {item.count}
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {item.stage}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-green-700 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Export Lead Flow
          </h2>

          <div className="mt-6 text-xl leading-loose">
            New Enquiry
            → Assigned To Factory
            → Factory Contacted
            → Quotation Sent
            → Sample Sent
            → Order Confirmed
          </div>
        </div>

      </div>
    </main>
  );
}