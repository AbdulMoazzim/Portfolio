import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-container items-center gap-12 px-margin-mobile pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-margin-desktop md:pb-24 md:pt-24"
    >
      <div className="flex flex-col items-start gap-6">
        <p className="font-mono text-code-md text-primary">
          Karachi, Pakistan — open to work
        </p>

        <h1 className="max-w-3xl text-balance text-display-lg-mobile text-onsurface md:text-display-lg">
          Precision engineering, from lecture halls to production.
        </h1>

        <p className="max-w-2xl text-body-lg text-onsurface-variant">
          I&apos;m Abdul, a Computer Systems Engineering student at NED
          University and a MERN stack developer. I build platforms across
          fintech, renewable energy, and education, while preparing for
          graduate research in machine learning.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="rounded bg-primary px-6 py-3 text-body-md font-medium text-primary-on shadow-elevated transition-shadow hover:shadow-elevated-hover"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded bg-surface-container px-6 py-3 text-body-md font-medium text-onsurface transition-colors hover:bg-surface-container-high"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl bg-surface-container shadow-elevated">
        <Image
          src="/profile.png"
          alt="Abdul"
          fill
          priority
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}