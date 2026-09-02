type Milestone = {
  period: string;
  title: string;
  org: string;
  points: string[];
};

const MILESTONES: Milestone[] = [
  {
    period: "2026",
    title: "Dean's Honor Award",
    org: "NED University of Engineering & Technology",
    points: [
      "Awarded for academic standing, alongside a running CGPA of 3.769 / 4.0.",
    ],
  },
  {
    period: "2026",
    title: "Technical Lead, EmpowerGEN Pakistan",
    org: "TUM Global Sustainability Challenge",
    points: [
      "Led the technical build of a bilingual solar energy platform through to the Global Finals.",
    ],
  },
  {
    period: "2023",
    title: "Full Merit Scholarship",
    org: "NED University of Engineering & Technology",
    points: ["Awarded on entry, covering the full course of study."],
  },
  {
    period: "2023 – 2027",
    title: "B.E. Computer Systems Engineering",
    org: "NED University of Engineering & Technology, Karachi",
    points: ["Expected graduation: July 2027."],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop md:py-24"
    >
      <div className="mb-12 flex flex-col gap-3">
        <h2 className="text-headline-sm text-onsurface md:text-headline-md">
          Education & milestones
        </h2>
        <p className="max-w-2xl text-body-lg text-onsurface-variant">
          The path so far, on the way to a graduate degree in Machine
          Learning or Data Science.
        </p>
      </div>

      <ol className="flex flex-col">
        {MILESTONES.map((m, i) => (
          <li key={m.title} className="relative flex gap-6 pb-12 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
              {i < MILESTONES.length - 1 && (
                <span
                  className="w-px flex-1 bg-outline-variant"
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col gap-1 pb-1">
              <span className="font-mono text-label-caps uppercase text-primary">
                {m.period}
              </span>
              <h3 className="text-headline-sm text-onsurface">{m.title}</h3>
              <p className="text-body-md text-onsurface-variant">{m.org}</p>
              <ul className="mt-2 flex flex-col gap-1">
                {m.points.map((point) => (
                  <li
                    key={point}
                    className="text-body-md text-onsurface-variant"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
