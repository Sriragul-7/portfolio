import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index, labels }) {
  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.live);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="shine glass group flex h-full flex-col rounded-2xl p-5 transition hover:-translate-y-1 hover:border-teal-200/35 hover:bg-white/[0.055]"
    >
      <h3 className="text-2xl font-semibold leading-tight text-white transition group-hover:text-teal-100 md:text-[1.7rem]">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-100">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-5 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-200" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <a
          href={hasGithub ? project.github : undefined}
          target={hasGithub ? "_blank" : undefined}
          rel={hasGithub ? "noreferrer" : undefined}
          aria-disabled={!hasGithub}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition ${
            hasGithub
              ? "border-white/20 text-zinc-200 hover:border-white/50 hover:text-white"
              : "pointer-events-none border-white/10 text-zinc-500"
          }`}
        >
          <FaGithub /> {labels.github}
        </a>
        <a
          href={hasLive ? project.live : undefined}
          target={hasLive ? "_blank" : undefined}
          rel={hasLive ? "noreferrer" : undefined}
          aria-disabled={!hasLive}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition ${
            hasLive
              ? "bg-white text-black hover:bg-teal-100"
              : "pointer-events-none border border-white/10 text-zinc-500"
          }`}
        >
          <ExternalLink size={14} /> {labels.live}
        </a>
      </div>
    </motion.article>
  );
}
