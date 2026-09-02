type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  codeUrl?: string;
  status?: string;
  featured?: boolean;
};

// TODO(Abdul): swap in your real demo/repo URLs once each project has one.
const PROJECTS: Project[] = [
  {
    name: "EmpowerGEN Pakistan",
    tagline: "Bilingual solar energy & community platform",
    description:
      "A bilingual (English/Urdu, RTL-aware) platform for solar energy access and community empowerment, built as Technical Lead for the TUM Global Sustainability Challenge — reached the Global Finals.",
    stack: ["Next.js", "next-intl", "Supabase", "Tailwind CSS"],
  },
  {
    name: "NED Scholars Platform",
    tagline: "Community platform for NED scholarship students",
    description:
      "A Next.js site for NED's scholars community, with a GSAP-animated hero slider, media management, and admin-gated content workflows built on shadcn/ui and Supabase.",
    stack: ["Next.js", "shadcn/ui", "Supabase", "GSAP"],
  },
  {
    name: "Solar Calculator",
    tagline: "NEPRA-tariff-based solar ROI calculator",
    description:
      "A calculator that models solar ROI against NEPRA's FY 2025–26 tariff slabs, with appliance-level load breakdowns, load-shedding schedule overrides, and AI-assisted, exportable PDF reports.",
    stack: ["Next.js", "TypeScript", "Supabase", "Gemini / Groq"],
  },
  {
    name: "Urdu–English NMT",
    tagline: "Neural machine translation, from scratch",
    description:
      "A capstone project translating between Urdu and English using a custom 1,060-pair parallel dataset and FastText embeddings, built with two teammates as a from-first-principles NMT system.",
    stack: ["Python", "FastText", "NMT"],
  },
  {
    name: "Multi-Agent Scrum Platform",
    tagline: "Human-in-the-loop AI for Agile teams — Final Year Project",
    description:
      "An event-driven, multi-agent platform where specialised AI agents — Product Owner, Scrum Master, Developer Support, QA, Knowledge — collaborate with human Scrum teams using shared project memory, without automating the development work itself.",
    stack: ["FastAPI", "PostgreSQL", "Event-driven"],
    status: "In progress",
  },
];

function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-primary-fixed px-3 py-1 font-mono text-label-caps uppercase text-primary">
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex h-full flex-col justify-between gap-6 rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-elevated transition-shadow duration-200 hover:shadow-elevated-hover ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
          {project.status && (
            <span className="rounded-full bg-surface-container px-3 py-1 font-mono text-label-caps uppercase text-onsurface-variant">
              {project.status}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-headline-sm text-onsurface">{project.name}</h3>
          <p className="mt-1 text-body-md text-primary">{project.tagline}</p>
        </div>

        <p className="text-body-md text-onsurface-variant">
          {project.description}
        </p>
      </div>

      {(project.demoUrl || project.codeUrl) && (
        <div className="flex gap-4 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="text-body-md font-medium text-primary hover:underline"
            >
              View Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              className="text-body-md font-medium text-onsurface-variant hover:underline"
            >
              Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop md:py-24"
    >
      <div className="mb-12 flex flex-col gap-3">
        <h2 className="text-headline-sm text-onsurface md:text-headline-md">
          Selected work
        </h2>
        <p className="max-w-2xl text-body-lg text-onsurface-variant">
          A few of the platforms I&apos;ve built or led, spanning fintech,
          sustainability, education, and research.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
