import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader({ done, name, roles = [] }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!roles.length) return undefined;

    const rotator = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 650);

    return () => clearInterval(rotator);
  }, [roles]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black px-5 text-center"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="hero-name text-4xl leading-tight text-white sm:text-5xl"
          >
            {name}
          </motion.p>

          <div className="mt-4 h-8 text-base font-medium text-teal-200 sm:text-lg">
            <span className="mr-2 text-zinc-500">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="inline-block"
              >
                {roles[roleIndex] || "Software Developer"}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="mt-10 h-1 w-[min(18rem,76vw)] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-teal-200 via-white to-teal-200"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.15, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
