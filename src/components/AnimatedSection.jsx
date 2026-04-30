import { motion } from "framer-motion";

export default function AnimatedSection({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
