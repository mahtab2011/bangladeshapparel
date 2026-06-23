"use client";

import Link from "next/link";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/app/lib/firebase";

export default function DemoFactoryPage() {
  const [form, setForm] = useState({
    buyerName: "",
    companyName: "",
    country: "",
    email: "",
    requirement: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function submitEnquiry() {
    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "buyerRequests"), {
        factoryId: "demo-factory",
        factoryName: "ABC Knitwear Ltd.",
        buyerName: form.buyerName,
        buyerCompany: form.companyName,
        country: form.country,
        email: form.email,
        requirement: form.requirement,
        status: "NEW",
        source: "factoryProfile",
        createdAt: serverTimestamp(),
      });

      setStatus(
        "Buyer enquiry submitted successfully. Request has been recorded and will be forwarded to the factory."
      );

      setForm({
        buyerName: "",
        companyName: "",
        country: "",
        email: "",
        requirement: "",
      });
    } catch (error) {
      console.error("Buyer enquiry failed:", error);
      setStatus("Buyer enquiry failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-green-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/" className="font-bold">
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-5xl font-extrabold">
            ABC Knitwear Ltd.
          </h1>

          <p className="mt-4 text-xl">
            BGMEA Verified • LEED Gold Certified • Exporting to 35 Countries
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-4xl font-bold text-green-700">12,000</h3>
            <p className="mt-2">Employees</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-4xl font-bold text-green-700">2.5M</h3>
            <p className="mt-2">Pieces Per Month</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-4xl font-bold text-green-700">35</h3>
            <p className="mt-2">Export Countries</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-4xl font-bold text-green-700">1998</h3>
            <p className="mt-2">Established</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="mb-8 text-4xl font-bold">Product Categories</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "T-Shirts",
            "Polo Shirts",
            "Sweatshirts",
            "Hoodies",
            "Sportswear",
            "Kidswear",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full bg-green-100 px-6 py-3 font-bold text-green-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-4xl font-bold">Factory Gallery</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="flex h-60 items-center justify-center rounded-3xl bg-slate-200 text-5xl"
            >
              🏭
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-4xl font-bold">Certifications</h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "BGMEA Member",
            "LEED Gold",
            "WRAP",
            "BSCI",
            "SEDEX",
            "OEKO-TEX",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-8 text-center shadow"
            >
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl bg-white p-10 shadow">
          <h2 className="mb-6 text-4xl font-bold">
            Buyer Enquiry Form
          </h2>

          <p className="mb-6 text-slate-600">
            Buyer requests are first recorded by BangladeshApparel.com and then
            forwarded to the factory, leaving a complete enquiry trail.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border p-4"
              placeholder="Buyer Name"
              value={form.buyerName}
              onChange={(e) =>
                updateField("buyerName", e.target.value)
              }
            />

            <input
              className="rounded-2xl border p-4"
              placeholder="Company Name"
              value={form.companyName}
              onChange={(e) =>
                updateField("companyName", e.target.value)
              }
            />

            <input
              className="rounded-2xl border p-4"
              placeholder="Country"
              value={form.country}
              onChange={(e) =>
                updateField("country", e.target.value)
              }
            />

            <input
              className="rounded-2xl border p-4"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
            />
          </div>

          <textarea
            className="mt-4 h-40 w-full rounded-2xl border p-4"
            placeholder="Describe your sourcing requirement..."
            value={form.requirement}
            onChange={(e) =>
              updateField("requirement", e.target.value)
            }
          />

          <button
            onClick={submitEnquiry}
            disabled={loading}
            className="mt-6 rounded-2xl bg-green-700 px-8 py-4 font-bold text-white disabled:bg-slate-400"
          >
            {loading ? "Submitting..." : "Send Enquiry"}
          </button>

          {status && (
            <p className="mt-5 font-bold text-green-700">
              {status}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}