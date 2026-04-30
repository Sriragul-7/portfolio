import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.45 }}
      className="mb-8 md:mb-10"
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.32em] text-teal-200/85">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">{subtitle}</p>}
    </motion.div>
  );
}
