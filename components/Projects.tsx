"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Split, Star } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-14 pb-20 pt-10 max-w-7xl mx-auto">
      <p className="label mb-5">Selected Work</p>
      <h2 className="h2 max-w-3xl"><Split text="Projects I'm proud of." /></h2>
      <div className="mt-14">
        {projects.map((p, i) => (
          <div key={p.n} className="sticky mb-10" style={{ top: 96 + i * 22 }}>
            <motion.article initial={{ opacity: 0, y: 70, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl p-8 md:p-12 min-h-[56vh] flex flex-col justify-between shadow-2xl shadow-black/10 ${p.tone}`}>
              <div className="flex items-center justify-between text-sm uppercase tracking-widest opacity-80">
                <span>{p.n}</span><Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-extrabold leading-[1.05] tracking-tight text-[clamp(2rem,5.5vw,4.6rem)]">{p.title}</h3>
                <p className="mt-5 max-w-xl opacity-85">{p.desc}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => <span key={t} className="border border-current/40 rounded-full px-3 py-1 text-xs">{t}</span>)}
                  {p.href && <a href={p.href} target="_blank" rel="noopener" className="ml-auto underline underline-offset-4 text-sm font-medium hover:opacity-70">Visit live site ↗</a>}
                </div>
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  );
}
