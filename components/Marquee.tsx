import { ticker } from "@/lib/data";
import { Star } from "./ui";

export default function Marquee() {
  const row = [...ticker, ...ticker];
  return (
    <div className="relative z-20 -mt-24 overflow-hidden py-12 pointer-events-none">
      <div className="-rotate-2 scale-110 bg-ink text-cream py-5 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...row, ...row].map((t, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 text-sm md:text-base uppercase tracking-[.2em]">
              {t}<Star className="w-4 h-4 text-flame" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}