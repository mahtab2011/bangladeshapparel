"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import LanguageSelector from "./components/LanguageSelector";
import { LanguageCode, translations } from "./lib/translations";

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLanguage =
      (localStorage.getItem("language") as LanguageCode) || "en";

    setLanguage(savedLanguage);

    function handleLanguageChange(event: Event) {
      const customEvent = event as CustomEvent<LanguageCode>;
      setLanguage(customEvent.detail);
    }

    window.addEventListener("languageChange", handleLanguageChange);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
    };
  }, []);

  const t = translations[language];

  const leadershipCards = [
    {
      title: "BGMEA",
      text: t.bgmeaText,
    },
    {
      title: "BKMEA",
      text: t.bkmeaText,
    },
    {
      title: t.greenFactories,
      text: t.greenText,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-lg font-semibold uppercase tracking-widest">
            {t.heroBadge}
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-green-100">
            {t.heroText}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/factories"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-green-700"
            >
              {t.browseFactories}
            </Link>

            <Link
              href="/buyer-centre"
              className="rounded-2xl border border-white px-8 py-4 font-bold text-white"
            >
              {t.buyerCentre}
            </Link>

            <Link
              href="/factory-signup"
              className="rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-900"
            >
              {t.registerFactory}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <LanguageSelector />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900">
            {t.searchTitle}
          </h2>

          <p className="mt-2 text-slate-600">{t.searchText}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <input
              className="rounded-2xl border p-4"
              placeholder={t.productPlaceholder}
            />

            <input
              className="rounded-2xl border p-4"
              placeholder={t.locationPlaceholder}
            />

            <select className="rounded-2xl border p-4">
              <option>{t.certification}</option>
              <option>WRAP</option>
              <option>BSCI</option>
              <option>SEDEX</option>
              <option>LEED</option>
              <option>OEKO-TEX</option>
            </select>

            <Link
              href="/factories"
              className="rounded-2xl bg-green-700 p-4 text-center font-bold text-white"
            >
              {t.searchFactories}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-center text-4xl font-bold">
          {t.industryTitle}
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">4,200+</h3>
            <p className="mt-3 text-lg">{t.activeFactories}</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">3,723</h3>
            <p className="mt-3 text-lg">{t.exportUnits}</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">4M+</h3>
            <p className="mt-3 text-lg">{t.workforce}</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h3 className="text-5xl font-bold text-green-700">260+</h3>
            <p className="mt-3 text-lg">{t.greenFactories}</p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-4xl font-bold">
            {t.leadershipTitle}
          </h2>

          <p className="mb-10 max-w-5xl text-lg text-slate-700">
            {t.leadershipText}
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {leadershipCards.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow"
              >
                <h3 className="text-3xl font-bold text-green-700">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">
          {t.factoryActionsTitle}
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {t.factoryActions.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-8 shadow">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-4xl font-bold">
            {t.factoryCategoriesTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {t.categories.map((item) => (
              <div
                key={item}
                className="rounded-3xl border bg-slate-50 p-8 shadow-sm"
              >
                <div className="mb-4 text-5xl">🏭</div>
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-4xl font-bold">{t.accessoriesTitle}</h2>

        <div className="grid gap-6 md:grid-cols-4">
          {t.accessories.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-8 shadow">
              <div className="mb-4 text-5xl">📦</div>
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-4xl font-bold">{t.buyerCentreTitle}</h2>
          <p className="max-w-4xl text-lg text-slate-700">
            {t.buyerCentreText}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-4xl font-bold">{t.heritageTitle}</h2>
          <p className="max-w-5xl text-lg text-slate-700">
            {t.heritageText}
          </p>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-4xl font-bold">{t.mbnconTitle}</h2>
          <p className="max-w-4xl text-lg text-slate-300">
            {t.mbnconText}
          </p>
        </div>
      </section>

      <section className="bg-green-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">{t.footerTitle}</h2>
          <p className="mt-3">{t.footerText}</p>
        </div>
      </section>
    </main>
  );
}