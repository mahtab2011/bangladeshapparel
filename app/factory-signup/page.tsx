import Link from "next/link";

export default function FactorySignupPage() {
  const productCategories = [
    "Knitwear",
    "Woven Garments",
    "Denim",
    "Outerwear",
    "Sportswear",
    "Sweaters",
    "Lingerie",
    "Workwear",
    "Textile Mill",
    "Accessories Supplier",
  ];

  const certificates = [
    "BGMEA Member",
    "BKMEA Member",
    "WRAP",
    "BSCI",
    "SEDEX",
    "OEKO-TEX",
    "LEED",
    "ISO",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link href="/" className="font-bold text-green-100">
            ← Back to Home
          </Link>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold">
            Factory Registration Centre
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-green-100">
            Manufacturers can register their company, create a verified profile,
            upload photos, videos, certificates, product categories, capacity
            information and buyer contact details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Company Information
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border p-4" placeholder="Company Name" />
              <input className="rounded-2xl border p-4" placeholder="Factory Name" />
              <input className="rounded-2xl border p-4" placeholder="BGMEA / BKMEA Member No" />
              <input className="rounded-2xl border p-4" placeholder="Contact Person" />
              <input className="rounded-2xl border p-4" placeholder="Email Address" />
              <input className="rounded-2xl border p-4" placeholder="Mobile / WhatsApp" />
              <input className="rounded-2xl border p-4" placeholder="Website" />
              <input className="rounded-2xl border p-4" placeholder="Factory Location" />
            </div>

            <h2 className="mt-10 text-3xl font-bold text-slate-900">
              Production & Capacity
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border p-4" placeholder="Monthly Production Capacity" />
              <input className="rounded-2xl border p-4" placeholder="Number of Workers" />
              <input className="rounded-2xl border p-4" placeholder="Export Markets" />
              <input className="rounded-2xl border p-4" placeholder="Major Buyers / Brands" />
            </div>
<h2 className="mt-10 text-3xl font-bold text-slate-900">
  Photos, Videos & Documents
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
  <div className="rounded-2xl border border-dashed p-5">
    <p className="font-bold">Factory Photos</p>
    <label className="mt-4 block cursor-pointer rounded-2xl bg-green-700 px-5 py-4 text-center font-bold text-white hover:bg-green-800">
  Click to Upload Files
  <input
    className="hidden"
    type="file"
    multiple
    accept="image/*"
  />
</label>
  </div>

  <div className="rounded-2xl border border-dashed p-5">
    <p className="font-bold">Product Photos</p>
    <label className="mt-4 block cursor-pointer rounded-2xl bg-green-700 px-5 py-4 text-center font-bold text-white hover:bg-green-800">
  Click to Upload Files
  <input
    className="hidden"
    type="file"
    multiple
    accept="image/*"
  />
  </label>
  </div>

  <div className="rounded-2xl border border-dashed p-5">
    <p className="font-bold">Management Photos</p>

    <label className="mt-4 block cursor-pointer rounded-2xl bg-green-700 px-5 py-4 text-center font-bold text-white hover:bg-green-800">
      Click to Upload Management Photos
      <input
        className="hidden"
        type="file"
        multiple
        accept="image/*"
      />
    </label>
  </div>

  <div className="rounded-2xl border border-dashed p-5">
    <p className="font-bold">Certificates / Documents</p>

    <label className="mt-4 block cursor-pointer rounded-2xl bg-yellow-500 px-5 py-4 text-center font-bold text-slate-900 hover:bg-yellow-600">
      Click to Upload Certificates
      <input
        className="hidden"
        type="file"
        multiple
        accept=".pdf,image/*"
      />
    </label>
  </div>

  <div className="rounded-2xl border border-dashed p-5">
    <p className="font-bold">Factory Videos</p>

    <label className="mt-4 block cursor-pointer rounded-2xl bg-blue-700 px-5 py-4 text-center font-bold text-white hover:bg-blue-800">
      Click to Upload Factory Videos
      <input
        className="hidden"
        type="file"
        multiple
        accept="video/*"
      />
    </label>
  </div>

  <div className="rounded-2xl border border-dashed p-5">
    <p className="font-bold">Product Videos</p>

    <label className="mt-4 block cursor-pointer rounded-2xl bg-blue-700 px-5 py-4 text-center font-bold text-white hover:bg-blue-800">
      Click to Upload Product Videos
      <input
        className="hidden"
        type="file"
        multiple
        accept="video/*"
      />
    </label>
  </div>
</div>
            <textarea
              className="mt-4 min-h-32 w-full rounded-2xl border p-4"
              placeholder="Company Description"
            />

            <button className="mt-8 rounded-2xl bg-green-700 px-8 py-4 font-bold text-white">
              Submit Factory Profile
            </button>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold">Product Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {productCategories.map((item) => (
                  <span key={item} className="rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold">Certificates</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {certificates.map((item) => (
                  <span key={item} className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow">
              <h3 className="text-2xl font-bold">Profile Visibility</h3>
              <p className="mt-4 text-slate-300">
                After verification, each factory will receive a public buyer-facing
                profile with photos, videos, certificates, product capacity and
                buyer enquiry options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}