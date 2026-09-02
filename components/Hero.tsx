export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-container flex-col items-start gap-6 px-margin-mobile pb-16 pt-16 md:px-margin-desktop md:pb-24 md:pt-24"
    >
      <p className="font-mono text-code-md text-primary">
        Karachi, Pakistan — open to remote work
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
    </section>
  );
}
