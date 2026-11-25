"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { P } from "@/lib/data";
import { Split, Star } from "./ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -70]);
  // Batman grows as you scroll down and shrinks back as you scroll up
  const batScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.9]), { stiffness: 90, damping: 20 });
  const batOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 0.18]);
  const [bad, setBad] = useState(false);
  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] px-6 md:px-14 pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-8 items-end">
        <motion.div style={{ y: yText }} className="relative z-20 self-center pb-24 md:pb-28">
          <h1 className="font-display uppercase leading-[1.02] tracking-wide text-[clamp(2.8rem,6vw,5.4rem)]">
            <Split text=" A Software ✺ Developer & UI/UX Designer based in Bhopal." />
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest">
            Design <Star className="w-4 h-4 text-violet" /> Development <Star className="w-4 h-4 text-violet" /> Data
          </div>
          <div className="mt-8 flex">
            <a href="#contact" className="bg-ink text-cream border border-ink px-6 py-3 text-sm hover:bg-violet hover:border-violet transition-colors">Got a project?</a>
            <a href={P.resume} download className="border border-ink border-l-0 px-6 py-3 text-sm hover:bg-ink hover:text-cream transition-colors">Download CV ↓</a>
          </div>
        </motion.div>

        <motion.div style={{ y: yPhoto }} className="relative mx-auto w-full max-w-lg">
          <motion.div style={{ scale: batScale, opacity: batOpacity }} className="pointer-events-none absolute z-0 left-[-10%] top-[16%] w-[120%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/batman.png" alt="" className="block w-full h-auto select-none" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            {bad ? (
              <div className="relative z-10 aspect-[4/5] bg-lavender grid place-items-center font-display text-8xl text-violet/70">PM</div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={P.photo} alt="Puneet Mishra" onError={() => setBad(true)}
                className="relative z-10 block w-full h-auto grayscale hover:grayscale-0 active:grayscale-0 transition duration-700" />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}