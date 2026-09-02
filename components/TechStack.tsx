const STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "FastAPI",
  "Tailwind CSS",
  "Supabase",
  "Redis",
  "Python",
];

export default function TechStack() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low">
      <div className="mx-auto max-w-container px-margin-mobile py-8 md:px-margin-desktop">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="font-mono text-code-md text-onsurface-variant"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
