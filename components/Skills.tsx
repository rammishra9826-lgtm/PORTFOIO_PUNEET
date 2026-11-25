"use client";
import { motion } from "framer-motion";
import { skills, P } from "@/lib/data";
import { Reveal, Split } from "./ui";

export default function Skills() {
  return (
    <>
      <section id="skills" className="bg-ink text-cream px-6 md:px-14 py-28">
        <div className="max-w-7xl mx-auto">
          <p className="label mb-5 !text-lavender">Skills</p>
          <h2 className="h2 max-w-3xl"><Split text="Tools I work with." /></h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-12">
            {Object.entries(skills).map(([g, list], gi) => (
              <Reveal key={g} delay={gi * 0.08}>
                <h3 className="font-display font-bold text-xl mb-5 text-lavender">{g}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {list.map((s) => (
                    <motion.span key={s} whileHover={{ scale: 1.08, y: -3 }} className="border border-cream/30 rounded-full px-4 py-2 text-sm cursor-default hover:bg-violet hover:border-violet transition-colors">{s}</motion.span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-14 py-28 max-w-7xl mx-auto">
        <p className="label mb-5">Beyond the screen</p>
        <h2 className="h2 max-w-3xl"><Split text="Wins, leadership & the things I love." /></h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { t: "🏆 Winner, Algo Quest", d: "Won the Algo Quest coding competition." },
            { t: "🎯 Event Lead, Yogasynapso", d: "Coordinated event planning and team management." },
            { t: "🏍️ Bike creator & FPV pilot", d: "Sharing motorcycle tips on Instagram and flying FPV drones for aerial videography.", href: P.instagram },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="h-full border border-ink/25 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-lavender">
                <h3 className="font-display font-bold text-xl">{c.t}</h3>
                <p className="mt-3 text-sm opacity-75">{c.d}</p>
                {c.href && <a href={c.href} target="_blank" rel="noopener" className="inline-block mt-4 text-sm underline underline-offset-4">@Biker_bandaa ↗</a>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
