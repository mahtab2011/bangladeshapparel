export default function WorkforceSkillsPage() {
  const heritageSkills = [
    "Muslin weaving from fine Phuti Karpas cotton",
    "Dhakai Jamdani handloom craftsmanship",
    "Tangail saree weaving tradition",
    "Pabna and Sirajganj textile craft skills",
    "Pattern memory and repeat-based design discipline",
    "Generational hand-skill transfer",
  ];

  const modernSkills = [
    "Sewing operations",
    "Quality control",
    "Line balancing",
    "Finishing",
    "Denim production",
    "Knitwear production",
    "Woven garments",
    "Compliance-based production",
  ];

  const globalContribution = [
    "United Kingdom",
    "Manchester",
    "Brick Lane",
    "Jordan",
    "Cambodia",
    "Ethiopia",
    "Mauritius",
    "Egypt",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-indigo-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-extrabold">
            Bangladesh Workforce Skills & Trainability
          </h1>

          <p className="mt-6 max-w-5xl text-xl text-indigo-100">
            Bangladesh apparel strength is rooted in centuries of textile
            craftsmanship, from muslin and handloom weaving to today&apos;s
            globally recognised garment workforce.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <section className="rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-indigo-800">
            From Muslin to Modern Manufacturing
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            Bengal&apos;s textile history began with extraordinary hand skills.
            Fine muslin, woven from Phuti Karpas cotton, was once used by elites
            and royal households across the world. This heritage continued
            through Dhakai Jamdani, Tangail sarees and regional handloom
            traditions in places such as Pabna and Sirajganj.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {heritageSkills.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-indigo-50 p-5 text-center font-semibold text-indigo-800"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Bangladesh Textile Skills in the United Kingdom
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            During the 1960s and 1970s, thousands of Bangladesh-born skilled
            workers contributed to the United Kingdom&apos;s garment and textile
            economy, particularly in historic industrial and migrant enterprise
            hubs such as Manchester and Brick Lane. Many carried tacit textile
            skills inherited through generations of weaving, sewing, cutting,
            finishing and small workshop production.
          </p>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            This migration of skill shows that Bangladesh&apos;s apparel
            capability is not only factory-based. It is also cultural, inherited
            and practical — passed from family to family, village to village and
            workshop to workshop. This tacit knowledge later became part of the
            foundation of Bangladesh&apos;s modern garment workforce.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-bold text-slate-900">
            Modern Apparel Operative Capability
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            Today, Bangladeshi garment operatives have developed strong
            production discipline, fast learning ability, quality awareness and
            adaptability to global buyer requirements. This trainability is a
            major national asset for moving into high-value branded products.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {modernSkills.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-100 p-5 text-center font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-green-50 p-8 shadow">
          <h2 className="text-3xl font-bold text-green-800">
            Global Contribution of Bangladeshi Apparel Skills
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            Skilled Bangladeshi apparel professionals and operatives have
            contributed to garment production ecosystems in the United Kingdom
            and later in countries such as Jordan, Cambodia, Ethiopia, Mauritius
            and Egypt. This demonstrates the transferability of Bangladesh&apos;s
            garment skills to global manufacturing environments.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {globalContribution.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-center font-bold text-green-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-indigo-900 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Strategic Message
          </h2>

          <p className="mt-4 max-w-5xl leading-8 text-indigo-100">
            Bangladesh&apos;s future apparel competitiveness will depend not
            only on low-cost production, but on skill upgrading, women worker
            development, technical training, design capability, quality systems
            and AI-supported factory intelligence.
          </p>
        </section>
      </section>
    </main>
  );
}