"use client";

import Link from "next/link";
import { createFactory } from "@/app/lib/bangladeshapparel/factories";

export default function FactorySeedPage() {
  async function seedFactories() {
    await createFactory({
      factoryId: "ABC-001",
      factoryName: "ABC Knitwear Ltd.",
      location: "Gazipur",
      category: "Knitwear",
      employees: "4500",
      capacity: "500,000 pcs/month",
      leedStatus: "LEED Gold",
      exportMarkets: "UK, Germany, France",
      contactEmail: "info@abcknitwear.com",
      website: "www.abcknitwear.com",
      status: "active",
    });

    await createFactory({
      factoryId: "DEN-001",
      factoryName: "Green Denim Ltd.",
      location: "Ashulia",
      category: "Denim",
      employees: "3200",
      capacity: "300,000 pcs/month",
      leedStatus: "LEED Platinum",
      exportMarkets: "USA, Canada",
      contactEmail: "info@greendenim.com",
      website: "www.greendenim.com",
      status: "active",
    });

    await createFactory({
      factoryId: "WOV-001",
      factoryName: "Dhaka Fashion Ltd.",
      location: "Narayanganj",
      category: "Woven",
      employees: "2800",
      capacity: "400,000 pcs/month",
      leedStatus: "LEED Silver",
      exportMarkets: "UK, Spain",
      contactEmail: "info@dhakafashion.com",
      website: "www.dhakafashion.com",
      status: "active",
    });

    await createFactory({
      factoryId: "SWT-001",
      factoryName: "Bengal Sweaters Ltd.",
      location: "Gazipur",
      category: "Sweaters",
      employees: "2100",
      capacity: "250,000 pcs/month",
      leedStatus: "LEED Gold",
      exportMarkets: "Italy, Germany",
      contactEmail: "info@bengalsweaters.com",
      website: "www.bengalsweaters.com",
      status: "active",
    });

    alert("Demo factories created successfully.");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow">

        <Link
          href="/"
          className="font-semibold text-green-700"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-green-800">
          Factory Seed Centre
        </h1>

        <p className="mt-4 text-gray-600">
          Create demonstration factories in Firestore.
        </p>

        <button
          onClick={seedFactories}
          className="mt-8 rounded-2xl bg-green-700 px-8 py-4 font-bold text-white"
        >
          Create Demo Factories
        </button>

      </div>
    </main>
  );
}