"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getLiveFactories } from "@/app/lib/bangladeshapparel/getFactories";
import { ApparelFactory } from "@/app/lib/bangladeshapparel/factoryTypes";

export default function FactoryComparisonPage() {
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
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="font-semibold text-green-700"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Factory Comparison Centre
        </h1>

        <p className="mt-3 text-gray-600">
          Compare factory capability, sustainability,
          production strength, and export readiness.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow">

          {loading ? (
            <div className="p-8">
              Loading factories...
            </div>
          ) : (
            <table className="w-full border-collapse text-left text-sm">

              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-4">Factory</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Employees</th>
                  <th className="p-4">Capacity</th>
                  <th className="p-4">Sustainability</th>
                  <th className="p-4">Export Markets</th>
                </tr>
              </thead>

              <tbody>
                {factories.map((factory) => (
                  <tr
                    key={factory.id || factory.factoryId}
                    className="border-b"
                  >
                    <td className="p-4 font-bold text-green-800">
                      {factory.factoryName}
                    </td>

                    <td className="p-4">
                      {factory.location}
                    </td>

                    <td className="p-4">
                      {factory.category}
                    </td>

                    <td className="p-4">
                      {factory.employees}
                    </td>

                    <td className="p-4">
                      {factory.capacity}
                    </td>

                    <td className="p-4">
                      {factory.leedStatus}
                    </td>

                    <td className="p-4">
                      {factory.exportMarkets}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          )}

        </div>

        <div className="mt-8 rounded-2xl bg-green-700 p-6 text-white shadow">

          <h2 className="text-2xl font-bold">
            BGMEA Demonstration Value
          </h2>

          <p className="mt-3 text-green-50">
            This comparison now uses live Firestore data.
            Any factory added through the platform can
            automatically appear here for executive review.
          </p>

        </div>

      </div>
    </main>
  );
}