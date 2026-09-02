export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop md:py-24"
    >
      <h2 className="text-headline-sm text-onsurface md:text-headline-md">
        How I work
      </h2>
      <div className="grid gap-10 md:gap-16">
        <div className="flex flex-col gap-5 text-body-lg text-onsurface-variant">
          <p>
            I&apos;m moving away from quick, improvised code toward
            deliberate engineering: typed interfaces, documented decisions,
            and systems built so someone else could pick them up without a
            walkthrough. Good software should be legible before it&apos;s
            clever.
          </p>
          <p>
            I&apos;d rather spend an extra hour on the interface between two
            modules than debug their coupling for a week later. Naming,
            structure, and constraints matter more to me than raw output —
            a slower, well-reasoned solution beats a fast one that only I
            can explain.
          </p>
        </div>
      </div>
    </section>
  );
}
