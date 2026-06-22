export default function LanguageSelector() {
  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Spanish" },
    { code: "FR", name: "French" },
    { code: "IT", name: "Italian" },
    { code: "PT", name: "Portuguese" },
    { code: "AR", name: "Arabic" },
    { code: "SW", name: "Swahili" },
    { code: "RU", name: "Russian" },
    { code: "JA", name: "Japanese" },
    { code: "CN", name: "Chinese" },
    { code: "KR", name: "Korean" },
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
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-green-700 hover:bg-green-50 hover:text-green-700"
            title={language.name}
          >
            {language.code}
          </button>
        ))}
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Multilingual sourcing interface planned for global buyers.
      </p>
    </div>
  );
}