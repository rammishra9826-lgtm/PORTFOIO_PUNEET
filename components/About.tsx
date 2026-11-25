"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { P, projects } from "@/lib/data";
import { Reveal, Split, Star } from "./ui";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 1.6, onUpdate: (l) => setV(Math.round(l)) }); return () => c.stop(); } }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about">
      <div className="px-6 md:px-14 pt-24 pb-20 text-center max-w-5xl mx-auto">
        <p className="label mb-5">About</p>
        <h2 className="h2"><Split text="I turn raw data into decisions and ideas into products." /></h2>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
          {["SQL & Power BI dashboards", "React & Next.js interfaces", "AI-assisted development"].map((t) => (
            <span key={t} className="flex items-center gap-2"><Star className="w-4 h-4 text-violet" />{t}</span>
          ))}
        </Reveal>
        <Reveal delay={0.3} className="mt-10"><a href={P.resume} download className="inline-block bg-ink text-cream px-8 py-3.5 text-sm hover:bg-violet transition-colors">Download CV ↓</a></Reveal>
      </div>
      <div className="bg-ink text-cream px-6 md:px-14 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-cream/80 leading-relaxed">
          <Reveal><p>{P.about1}</p></Reveal><Reveal delay={0.15}><p>{P.about2}</p></Reveal>
        </div>
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-3 gap-6 text-center">
          {[["Roles", 3, ""], ["Projects", projects.length, ""], ["Tools", 10, "+"]].map(([l, n, s]) => (
            <Reveal key={l as string}><div className="font-display font-extrabold text-5xl md:text-7xl text-lavender"><Counter to={n as number} suffix={s as string} /></div><div className="mt-2 text-xs uppercase tracking-widest text-cream/60">{l}</div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}