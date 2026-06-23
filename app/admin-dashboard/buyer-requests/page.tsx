"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getBuyerRequests,
  forwardBuyerRequestToFactory,
} from "@/app/lib/bangladeshapparel/buyerRequests";

import { BuyerRequest } from "@/app/lib/bangladeshapparel/buyerRequestTypes";

export default function BuyerRequestsAdminPage() {
  const [requests, setRequests] = useState<BuyerRequest[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRequests() {
    setLoading(true);
    const data = await getBuyerRequests();
    setRequests(data);
    setLoading(false);
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function handleForward(requestId: string) {
    await forwardBuyerRequestToFactory({
      requestId,
      factoryId: "demo-factory",
      factoryName: "ABC Knitwear Ltd.",
    });

    await loadRequests();
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="font-semibold text-green-700">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Bangladesh Apparel Admin Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          Buyer enquiries, sourcing requests, and factory forwarding audit trail.
        </p>

        {loading ? (
          <p className="mt-8">Loading buyer enquiries...</p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow">
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
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="border-b">
                    <td className="p-4">
                      <div className="font-bold">{request.buyerName}</div>
                      <div className="text-gray-500">{request.buyerEmail}</div>
                    </td>

                    <td className="p-4">{request.buyerCompany}</td>
                    <td className="p-4">{request.buyerCountry}</td>
                    <td className="p-4">{request.productCategory}</td>
                    <td className="p-4">{request.quantity}</td>

                    <td className="p-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                        {request.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {request.forwardedToFactoryName || "Not forwarded"}
                    </td>

                    <td className="p-4">
                      {request.status === "forwarded" ? (
                        <span className="font-semibold text-green-700">
                          Forwarded
                        </span>
                      ) : (
                        <button
                          onClick={() => request.id && handleForward(request.id)}
                          className="rounded-xl bg-green-700 px-4 py-2 font-bold text-white hover:bg-green-800"
                        >
                          Forward to Demo Factory
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {requests.length === 0 && (
                  <tr>
                    <td className="p-6 text-gray-500" colSpan={8}>
                      No buyer enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}