const LINKS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:you@example.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-margin-mobile py-8 font-mono text-code-md text-onsurface-variant md:flex-row md:justify-between md:px-margin-desktop">
        <p>© {year} Abdul. Built with precision.</p>
        <div className="flex gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
