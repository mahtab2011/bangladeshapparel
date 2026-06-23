"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/app/lib/firebase";
import { BuyerRequest } from "@/app/lib/bangladeshapparel/buyerRequestTypes";

export default function BuyerCountryIntelligencePage() {
  const [requests, setRequests] = useState<BuyerRequest[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRequests() {
    setLoading(true);

    const snapshot = await getDocs(collection(db, "buyerRequests"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BuyerRequest[];

    setRequests(data);
    setLoading(false);
  }

  useEffect(() => {
    loadRequests();
  }, []);

  const countryCounts = requests.reduce<Record<string, number>>((acc, item) => {
    const country = item.buyerCountry || "Unknown";
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  const productCounts = requests.reduce<Record<string, number>>((acc, item) => {
    const product = item.productCategory || "Unknown";
    acc[product] = (acc[product] || 0) + 1;
    return acc;
  }, {});

  const countryRows = Object.entries(countryCounts).sort((a, b) => b[1] - a[1]);
  const productRows = Object.entries(productCounts).sort((a, b) => b[1] - a[1]);

  const topCountry = countryRows[0]?.[0] || "N/A";
  const topProduct = productRows[0]?.[0] || "N/A";

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-green-700">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Buyer Country Intelligence Centre
        </h1>

        <p className="mt-3 text-gray-600">
          Country-wise buyer interest and product demand from live BangladeshApparel enquiries.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {countryRows.length}
            </h2>
            <p className="mt-2 font-semibold">Countries</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {requests.length}
            </h2>
            <p className="mt-2 font-semibold">Buyer Enquiries</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-extrabold text-green-700">
              {topCountry}
            </h2>
            <p className="mt-2 font-semibold">Top Country</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-extrabold text-green-700">
              {topProduct}
            </h2>
            <p className="mt-2 font-semibold">Top Product Category</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-green-800">
              Country-wise Buyer Interest
            </h2>

            {loading ? (
              <p className="mt-6">Loading country data...</p>
            ) : (
              <table className="mt-6 w-full border-collapse text-left text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="p-4">Country</th>
                    <th className="p-4">Enquiries</th>
                  </tr>
                </thead>

                <tbody>
                  {countryRows.map(([country, count]) => (
                    <tr key={country} className="border-b">
                      <td className="p-4 font-semibold">{country}</td>
                      <td className="p-4">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-green-800">
              Product Category Demand
            </h2>

            {loading ? (
              <p className="mt-6">Loading product data...</p>
            ) : (
              <table className="mt-6 w-full border-collapse text-left text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="p-4">Product Category</th>
                    <th className="p-4">Enquiries</th>
                  </tr>
                </thead>

                <tbody>
                  {productRows.map(([product, count]) => (
                    <tr key={product} className="border-b">
                      <td className="p-4 font-semibold">{product}</td>
                      <td className="p-4">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}