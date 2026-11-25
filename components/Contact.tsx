"use client";
import { P } from "@/lib/data";
import { Reveal, Split } from "./ui";

const field = "w-full bg-transparent border border-cream/40 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-lavender";

export default function Contact() {
  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    location.href = `mailto:${P.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`)}`;
  };
  return (
    <section id="contact" className="px-6 md:px-14 pt-28 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="label mb-5">Contact</p>
        <h2 className="h2"><Split text="Get in touch for more." /></h2>
        <p className="mt-6 text-ink/70">Have an opportunity, a project or just want to talk data? Drop me a message.</p>
      </div>
      <Reveal className="max-w-md mx-auto mt-12">
        <form onSubmit={send} className="bg-ink p-8 space-y-4">
          {[["name", "Name*", "John"], ["email", "Work Mail*", "john@gmail.com"], ["subject", "Subject*", "Type your subject here"]].map(([n, l, ph]) => (
            <label key={n} className="block text-xs text-cream">{l}<input required name={n} type={n === "email" ? "email" : "text"} placeholder={ph} className={`${field} mt-1.5`} /></label>
          ))}
          <label className="block text-xs text-cream">Message*<textarea required name="message" rows={4} placeholder="Type your message here" className={`${field} mt-1.5`} /></label>
          <button className="w-full bg-cream text-ink py-3 text-sm font-medium hover:bg-violet hover:text-white transition-colors">Send message →</button>
        </form>
      </Reveal>
      <div className="max-w-3xl mx-auto mt-14 text-center text-sm space-y-2">
        <p><a href={`mailto:${P.email}`} className="underline underline-offset-4">{P.email}</a> · <a href="tel:+919340994977">{P.phone}</a> · {P.location}</p>
        <p className="flex justify-center gap-6 pt-2">
          {[["GitHub", P.github], ["LinkedIn", P.linkedin], ["Instagram", P.instagram]].map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener" className="hover:text-violet">{l} ↗</a>)}
        </p>
      </div>
      <p className="mt-16 text-center text-xs text-ink/50">© {new Date().getFullYear()} Puneet Mishra · Built with Next.js, Tailwind &amp; Framer Motion</p>
    </section>
  );
}
