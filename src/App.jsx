import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Download, GraduationCap, Mail, Phone, Send, Trophy } from "lucide-react";
import { FaAws, FaDatabase, FaGitAlt, FaGithub, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiC,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  TbApi,
  TbArrowBackUp,
  TbBinaryTree,
  TbBinaryTree2,
  TbBoxMultiple,
  TbBrain,
  TbCloudComputing,
  TbCloudUpload,
  TbCpu,
  TbHierarchy3,
  TbRepeat,
  TbRouteAltLeft,
  TbServerCog,
  TbTopologyStar3,
} from "react-icons/tb";
import AnimatedSection from "./components/AnimatedSection";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import ProjectCard from "./components/ProjectCard";
import ScrollProgress from "./components/ScrollProgress";
import SectionTitle from "./components/SectionTitle";
import {
  about,
  achievements,
  certifications,
  personal,
  projects,
  roles,
  siteContent,
  skills,
  spokenLanguages,
} from "./data/portfolioData";

function App() {
  const [preloaded, setPreloaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const loader = setTimeout(() => setPreloaded(true), 2900);
    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    const rotator = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(rotator);
  }, []);

  const socialLinks = useMemo(
    () => siteContent.socialProfiles.map((item) => ({ label: item.label, href: personal.links[item.linkKey] })),
    []
  );

  const iconMap = {
    FaAws,
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaNodeJs,
    FaPython,
    FaReact,
    SiC,
    SiExpress,
    SiJavascript,
    SiJsonwebtokens,
    SiMongodb,
    SiNextdotjs,
    SiPostman,
    SiTailwindcss,
    SiTypescript,
    TbApi,
    TbArrowBackUp,
    TbBinaryTree,
    TbBinaryTree2,
    TbBoxMultiple,
    TbBrain,
    TbCloudComputing,
    TbCloudUpload,
    TbCpu,
    TbHierarchy3,
    TbRepeat,
    TbRouteAltLeft,
    TbServerCog,
    TbTopologyStar3,
  };

  return (
    <div className="relative">
      <Preloader done={preloaded} name={personal.name} roles={roles} />
      <ScrollProgress />
      <Navbar brand={siteContent.brand} sections={siteContent.navigation} />
      <BackToTop />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-5 md:px-6 md:pt-28">
        <AnimatedSection
          id="hero"
          className="hero-shell relative isolate px-1 py-7 sm:px-3 md:px-4 lg:px-6"
        >
          <div className="hero-field" aria-hidden="true" />
          <div className="grid items-center gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="hero-name max-w-3xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                {personal.name}
              </h1>
              <p className="mt-4 max-w-xl text-base text-zinc-200 md:text-lg">{personal.title}</p>
              <div className="mt-4 h-8 text-base font-medium text-teal-200 sm:text-lg">
                <span className="mr-2 text-zinc-500">{">"}</span>
                {roles[roleIndex]}
              </div>
              <div className="mobile-portrait relative mx-auto mt-3 h-[255px] w-full max-w-[18rem] sm:h-[320px] sm:max-w-[22rem] lg:hidden">
                <div className="portrait-stage">
                  <img src={personal.image} alt={personal.name} className="portrait-image" />
                </div>
              </div>
              <p className="mt-6 max-w-2xl leading-8 text-zinc-200">{personal.intro}</p>

              <div className="mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm">
                <p className="text-sm leading-6 text-zinc-200">{personal.availability}</p>
                <div className="mt-4 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-2 break-all transition hover:text-white">
                    <Mail size={15} className="shrink-0 text-teal-100" /> {personal.email}
                  </a>
                  <a href={`mailto:${personal.collegeEmail}`} className="flex items-center gap-2 break-all transition hover:text-white">
                    <Mail size={15} className="shrink-0 text-teal-100" /> {personal.collegeEmail}
                  </a>
                  <p className="flex items-center gap-2 text-zinc-200">
                    <Phone size={15} className="shrink-0 text-teal-100" /> {personal.phone}
                  </p>
                  <p className="flex items-center gap-2 text-zinc-300">
                    <GraduationCap size={15} className="shrink-0 text-teal-100" /> {personal.institution}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={personal.links.resume}
                  download
                  className="shine rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_55px_rgba(255,255,255,0.14)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Download size={15} /> {siteContent.hero.resumeButton}
                  </span>
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm text-zinc-100 transition hover:border-teal-200/70 hover:bg-white/8 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2">
                    {siteContent.hero.contactButton} <ArrowRight size={15} />
                  </span>
                </a>
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-3 text-sm text-zinc-200 transition hover:border-white/50 hover:text-white"
                >
                  {siteContent.hero.githubButton}
                </a>
                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-4 py-3 text-sm text-zinc-200 transition hover:border-white/50 hover:text-white"
                >
                  {siteContent.hero.linkedinButton}
                </a>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-0 mx-auto hidden min-h-[380px] w-full max-w-[35rem] sm:min-h-[460px] lg:block lg:min-h-[560px]"
            >
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-stage">
                <img src={personal.image} alt={personal.name} className="portrait-image" />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="mt-12 md:mt-16">
          <SectionTitle {...siteContent.sections.about} subtitle={about} />
          <div className="glass mt-8 rounded-2xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {siteContent.aboutDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-xs tracking-[0.24em] text-white/50">{item.label}</p>
                  <p className="mt-3 break-all text-lg font-medium text-white">{personal[item.valueKey]}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="mt-16 md:mt-28">
          <SectionTitle {...siteContent.sections.skills} />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {siteContent.skillGroups.map((group) => (
              <div key={group.heading} className="glass rounded-2xl p-5 transition hover:border-white/18 hover:bg-white/[0.055] md:p-7">
                <h3 className="mb-6 text-xl font-semibold text-white">{group.heading}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skills[group.dataKey].map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div
                        key={item.name}
                        className="rounded-xl border border-white/10 bg-black/18 p-4 transition hover:-translate-y-0.5 hover:border-teal-200/40 hover:bg-white/[0.055]"
                      >
                        <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-2xl text-teal-100">
                          {Icon ? <Icon /> : <span className="text-base">•</span>}
                        </div>
                        <p className="text-sm font-medium leading-6 text-zinc-100">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="mt-16 md:mt-28">
          <SectionTitle {...siteContent.sections.projects} />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} labels={siteContent.projectActions} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="achievements" className="mt-16 md:mt-28">
          <SectionTitle {...siteContent.sections.achievements} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="glass rounded-xl p-5 transition hover:-translate-y-0.5 hover:border-amber-200/35 hover:bg-white/[0.055]"
              >
                <div className="mb-3 inline-flex rounded-full bg-amber-200/10 p-2 text-amber-100">
                  <Trophy size={16} />
                </div>
                <p className="text-sm leading-7 text-zinc-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="certifications" className="mt-16 md:mt-28">
          <SectionTitle {...siteContent.sections.certifications} />
          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="glass rounded-xl p-5 transition hover:-translate-y-0.5 hover:border-sky-200/35 hover:bg-white/[0.055]">
                <div className="mb-3 inline-flex rounded-full bg-sky-200/10 p-2 text-sky-100">
                  <Code2 size={16} />
                </div>
                <h3 className="font-semibold text-white">{cert.name}</h3>
                <p className="mt-2 text-sm text-zinc-300">{cert.issuer}</p>
                <p className="mt-2 text-xs tracking-wider text-white/55">{cert.date}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="languages" className="mt-16 md:mt-28">
          <SectionTitle {...siteContent.sections.languages} />
          <div className="flex flex-wrap gap-3">
            {spokenLanguages.map((lang) => (
              <span key={lang} className="glass rounded-full px-5 py-2 text-sm text-zinc-100">
                {lang}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="mt-16 md:mt-28">
          <SectionTitle {...siteContent.sections.contact} />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-zinc-300">{personal.availability}</p>
              <div className="mt-5 space-y-3 text-sm">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-zinc-200 hover:text-white">
                  <Mail size={16} /> {personal.email}
                </a>
                <a href={`mailto:${personal.collegeEmail}`} className="flex items-center gap-2 break-all text-zinc-200 hover:text-white">
                  <Mail size={16} /> {personal.collegeEmail}
                </a>
                <p className="text-zinc-200">{personal.phone}</p>
                <p className="text-zinc-400">{personal.institution}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-teal-200/60 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <form
              action={`https://formsubmit.co/${personal.email}`}
              method="POST"
              className="glass rounded-2xl p-6"
            >
              <div className="grid gap-3">
                <input type="hidden" name="_subject" value={`${siteContent.contactForm.subjectPrefix} ${personal.name}`} />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
                <input
                  type="text"
                  name="name"
                  placeholder={siteContent.contactForm.namePlaceholder}
                  required
                  className="rounded-xl border border-white/15 bg-black/40 p-3 text-sm text-white outline-none transition focus:border-teal-200/70"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={siteContent.contactForm.emailPlaceholder}
                  required
                  className="rounded-xl border border-white/15 bg-black/40 p-3 text-sm text-white outline-none transition focus:border-teal-200/70"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder={siteContent.contactForm.messagePlaceholder}
                  required
                  className="rounded-xl border border-white/15 bg-black/40 p-3 text-sm text-white outline-none transition focus:border-teal-200/70"
                />
                <button type="submit" className="shine rounded-xl border border-white bg-white px-4 py-3 text-sm font-medium text-black">
                  <span className="inline-flex items-center gap-2">
                    <Send size={14} /> {siteContent.contactForm.submitButton}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        <p>
          {siteContent.footer.prefix} {new Date().getFullYear()} {personal.name} • {siteContent.footer.suffix}
        </p>
      </footer>
    </div>
  );
}

export default App;
