"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden>
      {[0, 45, 90, 135].map((a) => <line key={a} x1="12" y1="2" x2="12" y2="22" transform={`rotate(${a} 12 12)`} />)}
    </svg>
  );
}

/* Big hollow asterisk (like the Moxa reference) */
export function StarOutline({ className = "", color = "#5b3df5", bg = "#f4f2ee" }: { className?: string; color?: string; bg?: string }) {
  const arms = [0, 45, 90, 135];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {arms.map((a) => <rect key={"o" + a} x="39.5" y="2" width="21" height="96" rx="10.5" fill={color} transform={`rotate(${a} 50 50)`} />)}
      {arms.map((a) => <rect key={"i" + a} x="42" y="4.5" width="16" height="91" rx="8" fill={bg} transform={`rotate(${a} 50 50)`} />)}
    </svg>
  );
}

/* Word-by-word reveal. The trigger is on the outer (unclipped) span so the
   observer always fires. Use "✺" in the text to insert a star. */
export function Split({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text.replace(/✺/g, "")}>
      {text.split(" ").map((w, i) => (
        <motion.span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[.08em]"
          initial="hide" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
          <motion.span className="inline-block" variants={{ hide: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}>
            {w === "✺" ? <Star className="inline-block w-[.7em] h-[.7em] text-violet animate-spin [animation-duration:8s]" /> : w}&nbsp;
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}