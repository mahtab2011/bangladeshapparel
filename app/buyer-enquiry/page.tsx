"use client";

import { useState } from "react";
import Link from "next/link";
import { createBuyerRequest } from "@/app/lib/bangladeshapparel/buyerRequests";

export default function BuyerEnquiryPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  setLoading(true);
  setSuccess(false);

    await createBuyerRequest({
      buyerName: String(formData.get("buyerName") || ""),
      buyerCompany: String(formData.get("buyerCompany") || ""),
      buyerEmail: String(formData.get("buyerEmail") || ""),
      buyerCountry: String(formData.get("buyerCountry") || ""),
      productCategory: String(formData.get("productCategory") || ""),
      quantity: String(formData.get("quantity") || ""),
      targetPrice: String(formData.get("targetPrice") || ""),
      message: String(formData.get("message") || ""),
      preferredFactoryId: "",
      preferredFactoryName: "",
    });

    form.reset();
    setSuccess(true);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <Link href="/" className="font-semibold text-green-700">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Buyer Enquiry Form
        </h1>

        <p className="mt-3 text-gray-600">
          International buyers can submit sourcing requirements for Bangladesh apparel factories.
        </p>

        {success && (
          <div className="mt-6 rounded-xl bg-green-100 p-4 font-semibold text-green-800">
            Enquiry submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input name="buyerName" required placeholder="Buyer Name" className="w-full rounded-xl border p-3" />
          <input name="buyerCompany" required placeholder="Company Name" className="w-full rounded-xl border p-3" />
          <input name="buyerEmail" required type="email" placeholder="Email" className="w-full rounded-xl border p-3" />
          <input name="buyerCountry" required placeholder="Country" className="w-full rounded-xl border p-3" />

          <select name="productCategory" required className="w-full rounded-xl border p-3">
            <option value="">Select Product Category</option>
            <option value="Knitwear">Knitwear</option>
            <option value="Woven">Woven</option>
            <option value="Denim">Denim</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Sweater">Sweater</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Workwear">Workwear</option>
          </select>

          <input name="quantity" required placeholder="Required Quantity" className="w-full rounded-xl border p-3" />
          <input name="targetPrice" placeholder="Target Price / FOB Price" className="w-full rounded-xl border p-3" />

          <textarea
            name="message"
            required
            placeholder="Requirement details"
            rows={5}
            className="w-full rounded-xl border p-3"
          />

          <button
            disabled={loading}
            className="rounded-xl bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Buyer Enquiry"}
          </button>
        </form>
      </div>
    </main>
  );
}