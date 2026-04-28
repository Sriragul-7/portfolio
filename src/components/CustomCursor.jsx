import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 1024) return undefined;
    const handleMove = (event) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[70] hidden h-8 w-8 rounded-full border border-cyan-300/50 lg:block"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.35 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[69] hidden h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl lg:block"
        animate={{ x: pos.x - 64, y: pos.y - 64 }}
        transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.8 }}
      />
    </>
  );
}
