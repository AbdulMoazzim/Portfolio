import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFastapi,
  SiTailwindcss,
  SiSupabase,
  SiRedis,
  SiPython,
  SiGraphql,
  SiNumpy,
  SiPandas,
  SiRabbitmq,
  SiDocker,
  SiElasticsearch,
} from "react-icons/si";
import { ChartColumn, ChartLine, Workflow } from "lucide-react";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";

type StackItem = {
  name: string;
  Icon: IconType | ComponentType<{ className?: string }>;
};

const STACK: StackItem[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Redis", Icon: SiRedis },
  { name: "Python", Icon: SiPython },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "NumPy", Icon: SiNumpy },
  { name: "Pandas", Icon: SiPandas },
  { name: "Matplotlib", Icon: ChartColumn },
  { name: "Seaborn", Icon: ChartLine },
  { name: "RabbitMQ", Icon: SiRabbitmq },
  { name: "Docker", Icon: SiDocker },
  { name: "CI/CD", Icon: Workflow },
  { name: "Elasticsearch", Icon: SiElasticsearch },
];

export default function TechStack() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low">
      <div className="mx-auto max-w-container px-margin-mobile py-10 md:px-margin-desktop">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:justify-between md:gap-x-6">
          {STACK.map(({ name, Icon }) => (
            <li key={name} className="group relative">
              <Icon
                className="h-7 w-7 text-onsurface-variant transition-colors duration-200 group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="sr-only">{name}</span>
              <span
                role="tooltip"
                className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-inverse-surface px-2 py-1 font-mono text-label-caps uppercase text-inverse-onsurface opacity-0 transition-opacity duration-150 group-hover:opacity-100"
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}