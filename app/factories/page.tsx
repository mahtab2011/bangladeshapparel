"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getLiveFactories } from "@/app/lib/bangladeshapparel/getFactories";
import { ApparelFactory } from "@/app/lib/bangladeshapparel/factoryTypes";

export default function FactoriesPage() {
  const [factories, setFactories] = useState<ApparelFactory[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadFactories() {
    setLoading(true);
    const data = await getLiveFactories();
    setFactories(data);
    setLoading(false);
  }

  useEffect(() => {
    loadFactories();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/" className="font-bold text-green-100">
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-5xl font-extrabold">
            Bangladesh Factory Directory
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Live factory directory connected to Firestore.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {loading ? (
          <p>Loading factories...</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {factories.map((factory) => (
              <div
                key={factory.id || factory.factoryId}
                className="rounded-3xl bg-white p-8 shadow"
              >
                <div className="mb-4 text-5xl">🏭</div>

                <h2 className="text-3xl font-bold text-green-700">
                  {factory.factoryName}
                </h2>

                <p className="mt-3">Category: {factory.category}</p>
                <p>Location: {factory.location}</p>
                <p>Capacity: {factory.capacity}</p>
                <p>Employees: {factory.employees}</p>
                <p>Sustainability: {factory.leedStatus}</p>
                <p>Export Markets: {factory.exportMarkets}</p>

                <Link
                  href="/factories/demo-factory"
                  className="mt-6 inline-block rounded-2xl bg-green-700 px-6 py-3 font-bold text-white"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}