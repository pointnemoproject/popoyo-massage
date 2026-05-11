type SectionProps = {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  intro,
}: SectionProps) {
  return (
    <section className={`px-5 py-14 sm:px-6 lg:px-8 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || intro) && (
          <div className="mb-8 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay-600">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold leading-tight text-palm-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base leading-7 text-palm-900/72 sm:text-lg">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
