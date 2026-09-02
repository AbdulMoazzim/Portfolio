const STATS = [
  { label: "Role", value: "Technical Lead" },
  { label: "Project", value: "EmpowerGEN Pakistan" },
  { label: "Result", value: "Global Finalist" },
];

export default function Recognition() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop md:py-24">
      <div className="grid gap-10 rounded-xl bg-inverse-surface p-8 text-inverse-onsurface md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:p-14">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-label-caps uppercase text-primary-fixed-dim">
            Global Sustainability Challenge
          </p>
          <h2 className="text-headline-sm md:text-headline-md">
            Global Finalist, representing EmpowerGEN Pakistan
          </h2>
          <p className="text-body-lg text-inverse-onsurface/80">
            I served as Technical Lead for EmpowerGEN Pakistan, a bilingual
            (English/Urdu, RTL-aware) platform for solar energy access and
            community empowerment, through the Global Sustainability Challenge, carrying the
            project from its architecture through to the Global Finals.
          </p>
          <p className="text-body-lg text-inverse-onsurface/80">
            The brief was to design technology that makes a real difference
            for underserved communities, not just a working demo. Leading
            the technical side meant owning the build end to end: the
            Server Component data-fetching architecture, the
            English/Urdu localization, and the polish that turns a
            prototype into something a judging panel and, eventually,
            real users can trust.
          </p>
        </div>

        <div
          className="relative min-h-[700px] flex flex-col justify-center gap-6 overflow-hidden rounded-lg border-t border-inverse-onsurface/15 md:bg-cover bg-center bg-center p-6 pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-6"
          style={{ backgroundImage: "url('/TUM.jpeg')" }}
        >
          <div className="absolute inset-0 bg-inverse-surface/20" aria-hidden="true" />
          {STATS.map((stat) => (
            <div key={stat.label} className="relative flex flex-col gap-1">
              <span className="font-mono text-label-caps uppercase text-inverse-onsurface/60">
                {stat.label}
              </span>
              <span className="text-headline-sm">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}