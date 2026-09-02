export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop md:py-24"
    >
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <h2 className="text-headline-sm text-onsurface md:text-headline-md">
            How I work
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-body-lg text-onsurface-variant">
          <p>
            I&apos;m moving away from quick, improvised code toward
            deliberate engineering: typed interfaces, documented decisions,
            and systems built so someone else could pick them up without a
            walkthrough. Good software should be legible before it&apos;s
            clever.
          </p>
          <p>
            That shows up in the projects below — a trading dashboard with
            35 API routes and centralized auth, a bilingual platform built
            for a global sustainability challenge, an internal tool used by
            a scholars&apos; community. Different domains, same discipline:
            component architecture, design systems, and code that holds up
            under review.
          </p>
          <p>
            Longer term, I&apos;m preparing for an MSc in Machine Learning
            or Data Science, with graduate programmes in Germany and
            Erasmus Mundus in view. Everything I build now is also practice
            for that — rigorous, well-reasoned, and built to last.
          </p>
        </div>
      </div>
    </section>
  );
}
