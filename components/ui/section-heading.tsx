import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <header className={cn("mb-10 max-w-3xl", className)}>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.015em] text-ink md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p> : null}
    </header>
  );
}
