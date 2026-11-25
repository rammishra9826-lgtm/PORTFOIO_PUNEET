import { experience } from "@/lib/data";
import { Reveal, Split } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-14 py-28 max-w-7xl mx-auto">
      <p className="label mb-5">Experience &amp; Education</p>
      <h2 className="h2 max-w-3xl"><Split text="Where I've worked and studied." /></h2>
      <div className="mt-14 border-t border-ink/20">
        {experience.map((e) => (
          <Reveal key={e.role}>
            <div className="group grid md:grid-cols-[170px_1fr_1.3fr] gap-3 md:gap-10 py-9 px-2 border-b border-ink/20 transition-all duration-500 hover:bg-ink hover:text-cream hover:px-7">
              <span className="text-sm uppercase tracking-widest text-violet group-hover:text-lavender">{e.period}</span>
              <div><h3 className="font-display font-bold text-xl md:text-2xl">{e.role}</h3><p className="text-sm opacity-60 mt-1">{e.org}</p></div>
              <p className="text-sm leading-relaxed opacity-80">{e.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
