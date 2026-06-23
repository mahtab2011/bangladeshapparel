"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "@/app/lib/firebase";
import { BuyerRequest } from "@/app/lib/bangladeshapparel/buyerRequestTypes";

export default function FactoryDashboardPage() {
  const [enquiries, setEnquiries] = useState<BuyerRequest[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadFactoryEnquiries() {
    setLoading(true);

    const q = query(
      collection(db, "buyerRequests"),
      where("forwardedToFactoryId", "==", "demo-factory")
    );

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BuyerRequest[];

    setEnquiries(data);
    setLoading(false);
  }

  useEffect(() => {
    loadFactoryEnquiries();
  }, []);

  const countries = new Set(enquiries.map((item) => item.buyerCountry));
  const products = new Set(enquiries.map((item) => item.productCategory));

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-green-700">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Factory Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          ABC Knitwear Ltd. — buyer enquiries forwarded by BangladeshApparel Admin.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {enquiries.length}
            </h2>
            <p className="mt-2 font-semibold">Total Enquiries</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {countries.size}
            </h2>
            <p className="mt-2 font-semibold">Countries Reached</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              {products.size}
            </h2>
            <p className="mt-2 font-semibold">Product Categories</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-4xl font-extrabold text-green-700">
              1
            </h2>
            <p className="mt-2 font-semibold">Assigned Factory</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-green-800">
            Factory Enquiry Inbox
          </h2>

          {loading ? (
            <p className="mt-6">Loading enquiries...</p>
          ) : enquiries.length === 0 ? (
            <p className="mt-6 text-gray-500">
              No enquiries forwarded to this factory yet.
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
                    <th className="p-4">Target Price</th>
                    <th className="p-4">Message</th>
                  </tr>
                </thead>

                <tbody>
                  {enquiries.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4">
                        <div className="font-bold">{item.buyerName}</div>
                        <div className="text-gray-500">{item.buyerEmail}</div>
                      </td>
                      <td className="p-4">{item.buyerCompany}</td>
                      <td className="p-4">{item.buyerCountry}</td>
                      <td className="p-4">{item.productCategory}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4">{item.targetPrice}</td>
                      <td className="p-4">{item.message}</td>
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