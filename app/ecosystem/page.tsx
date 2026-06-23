import Link from "next/link";

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow">
        <Link href="/" className="font-semibold text-green-700">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Bangladesh Apparel Ecosystem
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          Bangladesh Apparel connects factories, buyers, suppliers,
          sustainability, heritage, workforce skills, investment opportunities
          and executive intelligence into one national digital platform.
        </p>
      </div>
    </main>
  );
}