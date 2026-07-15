import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  hindi,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  hindi?: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-8 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 heading-lg text-charcoal">{title}</h2>
      {hindi ? <p className="mt-2 font-devanagari text-lg text-gold">{hindi}</p> : null}
      {text ? <p className="mt-4 text-base leading-7 text-charcoal/70">{text}</p> : null}
    </div>
  );
}
