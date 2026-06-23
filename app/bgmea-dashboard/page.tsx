"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "@/app/lib/firebase";
import { BuyerRequest } from "@/app/lib/bangladeshapparel/buyerRequestTypes";

export default function BgmeaDashboardPage() {
  const [requests, setRequests] = useState<BuyerRequest[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRequests() {
    setLoading(true);

    const q = query(
      collection(db, "buyerRequests"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

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

  const forwarded = requests.filter(
    (item) => item.status === "forwarded"
  );

  const countries = new Set(
    requests.map((item) => item.buyerCountry).filter(Boolean)
  );

  const products = new Set(
    requests.map((item) => item.productCategory).filter(Boolean)
  );

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-green-700">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          BGMEA Command Centre
        </h1>

        <p className="mt-3 text-gray-600">
          Executive view of buyer enquiries, factory forwarding, and global sourcing interest.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">10</h2>
            <p className="mt-2 font-semibold">Sample Factories</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {requests.length}
            </h2>
            <p className="mt-2 font-semibold">Buyer Enquiries</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {forwarded.length}
            </h2>
            <p className="mt-2 font-semibold">Forwarded to Factories</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {countries.size}
            </h2>
            <p className="mt-2 font-semibold">Countries Reached</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-green-700 p-6 text-white shadow">
            <h2 className="text-2xl font-bold">Platform Value</h2>
            <p className="mt-3 text-green-50">
              Connects international buyers with Bangladesh factories through a verified digital enquiry pipeline.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-green-800">
              Product Categories
            </h2>
            <p className="mt-3 text-4xl font-extrabold text-green-700">
              {products.size}
            </p>
            <p className="mt-2 text-gray-600">
              Categories receiving buyer interest.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-green-800">
              Audit Trail
            </h2>
            <p className="mt-3 text-gray-600">
              Every enquiry and forwarding action is stored in Firestore for management review.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-green-800">
            Recent Buyer Requests
          </h2>

          {loading ? (
            <p className="mt-6">Loading buyer requests...</p>
          ) : requests.length === 0 ? (
            <p className="mt-6 text-gray-500">
              No buyer enquiries found yet.
            </p>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="p-4">Buyer</th>
                    <th className="p-4">Company</th>
                    <th className="p-4">Country</th>
                    <th className="p-4">Product</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Forwarded To</th>
                  </tr>
                </thead>

                <tbody>
                  {requests.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">
                        <div className="font-bold">{item.buyerName}</div>
                        <div className="text-gray-500">{item.buyerEmail}</div>
                      </td>
                      <td className="p-4">{item.buyerCompany}</td>
                      <td className="p-4">{item.buyerCountry}</td>
                      <td className="p-4">{item.productCategory}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {item.forwardedToFactoryName || "Not forwarded"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}