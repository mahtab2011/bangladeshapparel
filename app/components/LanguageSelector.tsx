"use client";

import { useEffect, useState } from "react";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] =
    useState("en");

  useEffect(() => {
    const saved =
      localStorage.getItem("language") || "en";

    setSelectedLanguage(saved);
  }, []);

  function changeLanguage(language: string) {
    localStorage.setItem("language", language);

    setSelectedLanguage(language);

    window.location.reload();
  }

  const languages = [
    { code: "en", label: "English" },
    { code: "bn", label: "বাংলা" },
    { code: "ar", label: "العربية" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
  ];

  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">
        Global Buyer Languages
      </p>

      <div className="flex flex-wrap gap-2">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() =>
              changeLanguage(language.code)
            }
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
              selectedLanguage === language.code
                ? "border-green-700 bg-green-700 text-white"
                : "border-slate-200 text-slate-700 hover:border-green-700 hover:bg-green-50 hover:text-green-700"
            }`}
          >
            {language.label}
          </button>
        ))}
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Multilingual sourcing interface for global buyers.
      </p>
    </div>
  );
}