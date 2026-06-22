export default function WorkerWelfarePage() {
  const welfareAreas = [
    {
      title: "Fair Wages",
      description:
        "Ensuring workers receive lawful wages, overtime benefits and timely payment in accordance with national regulations.",
    },
    {
      title: "Safe Workplace",
      description:
        "Maintaining safe buildings, fire safety systems, emergency preparedness and healthy working conditions.",
    },
    {
      title: "Childcare Facilities",
      description:
        "Supporting working mothers through factory-based childcare centres and early childhood support programmes.",
    },
    {
      title: "Healthcare Support",
      description:
        "Providing medical assistance, health awareness programmes and access to basic healthcare services.",
    },
    {
      title: "Women Empowerment",
      description:
        "Supporting women workers through leadership opportunities, skills development and workplace inclusion.",
    },
    {
      title: "Skills Development",
      description:
        "Continuous training programmes to improve productivity, quality and career progression opportunities.",
    },
  ];

  const complianceItems = [
    "No Child Labour",
    "Age Verification System",
    "Responsible Recruitment",
    "Worker Identity Verification",
    "Ethical Employment Practices",
    "Social Compliance Monitoring",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Worker Welfare & Responsible Employment
          </h1>

          <p className="mt-6 max-w-4xl text-xl text-blue-100">
            Bangladesh Apparel is committed to worker dignity, safety,
            responsible recruitment, childcare support, skills development and
            ethical employment practices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {welfareAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">👷</div>

              <h2 className="text-3xl font-bold text-blue-800">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Responsible Recruitment & Child Protection
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Bangladesh apparel manufacturers continue strengthening recruitment
            procedures through worker identity verification, age validation,
            documentation checks and ethical hiring systems to prevent child
            labour and ensure compliance with national and international
            standards.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {complianceItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-blue-50 p-5 text-center font-semibold text-blue-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-green-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Nutrition & Family Support
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Worker wellbeing extends beyond the factory floor. Future welfare
            initiatives may include nutritious meal programmes, health
            awareness, childcare support, financial literacy and family
            assistance programmes that improve quality of life and workforce
            stability.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-indigo-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-indigo-800">
            Future Opportunities
          </h2>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Factory childcare centres</li>
            <li>• Community healthcare programmes</li>
            <li>• Worker housing initiatives</li>
            <li>• Digital skills development</li>
            <li>• Financial literacy programmes</li>
            <li>• Women leadership development</li>
            <li>• Community education support</li>
          </ul>
        </section>

        <section className="mt-12 rounded-3xl bg-blue-800 p-8 text-white">
          <h2 className="text-3xl font-bold">
            People First Manufacturing
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-blue-100">
            Bangladesh's apparel success is built on its people. Sustainable
            growth requires safe workplaces, responsible recruitment, skills
            development, worker wellbeing and long-term social responsibility.
          </p>
        </section>
      </section>
    </main>
  );
}