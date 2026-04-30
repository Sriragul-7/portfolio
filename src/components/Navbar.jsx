import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ brand, sections }) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="fixed left-0 right-0 top-3 z-50 mx-auto hidden w-[94%] max-w-6xl rounded-2xl border border-white/10 bg-black/70 px-3 py-2 shadow-[0_14px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block md:top-4">
      <nav className="flex items-center justify-between gap-3">
        <p className="shrink-0 px-2 text-xs font-semibold tracking-[0.22em] text-white/85 sm:text-sm">{brand}</p>
        <ul className="flex items-center justify-end gap-1 overflow-x-auto whitespace-nowrap text-[11px] text-zinc-300 [scrollbar-width:none] md:text-xs">
          {sections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative block rounded-full px-3 py-1.5 capitalize transition ${
                  active === item.id ? "text-white" : "hover:text-white"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
