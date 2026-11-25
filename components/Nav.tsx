"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";

const links = ["About", "Experience", "Projects", "Contact"];

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setHidden(y > (scrollY.getPrevious() ?? 0) && y > 200 && !open));
  return (
    <>
      <motion.div style={{ scaleX: bar }} className="fixed top-0 left-0 right-0 h-[3px] bg-violet origin-left z-[70]" />
      <motion.header animate={{ y: hidden ? "-110%" : 0 }} transition={{ duration: 0.4 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 bg-cream/80 backdrop-blur-md">
        <a href="#home" className="font-display font-extrabold text-2xl tracking-tight">Puneet Mishra<span className="text-violet">.</span></a>
        <nav className="hidden md:flex gap-9 text-sm">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="relative group">
              {l}<span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:block border border-ink px-5 py-2 text-sm hover:bg-ink hover:text-cream transition-colors">Let&apos;s talk</a>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </motion.header>
      {open && (
        <div className="fixed inset-0 z-40 bg-cream pt-28 px-6 flex flex-col gap-6 font-display text-4xl font-extrabold md:hidden" onClick={() => setOpen(false)}>
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
        </div>
      )}
    </>
  );
}
