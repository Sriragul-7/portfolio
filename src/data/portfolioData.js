import profileImage from "../assets/profile.png";

/*
  PORTFOLIO CONTROL PANEL

  Edit this file to update the visible portfolio content.

  Quick guide:
  - Change personal text, emails, phone, social links, and resume path in `personal`.
  - Change the rotating hero words in `roles`.
  - Change all headings, labels, buttons, form text, and nav text in `siteContent`.
  - Add/remove project cards by editing the `projects` array.
  - Add/remove skills by editing the skill arrays.
  - Add/remove achievements, certifications, and languages from their arrays.

  Resume download:
  - Keep your resume file at: public/resume.pdf
  - Keep `links.resume` as "/resume.pdf"
  - Replacing public/resume.pdf will update the download without code changes.
*/

export const personal = {
  name: "SRI RAGUL A A",
  title: "Full Stack Developer | Problem Solver | Software Engineer",
  intro:
    "I build reliable full-stack products with a backend-first mindset, focusing on clean architecture, performance, and developer-friendly systems.",
  availability:
    "Open to fresher software development opportunities, product engineering roles, and backend-focused teams.",
  institution: "Bannari Amman Institute of Technology",
  collegeEmail: "sriragul.ec23@bitsathy.ac.in",
  email: "sriragul.aa@gmail.com",
  phone: "+91 63820 99700",
  image: profileImage,
  links: {
    github: "https://github.com/Sriragul-7/",
    linkedin: "https://www.linkedin.com/in/sri-ragul-a-a-245172330/",
    leetcode: "https://leetcode.com/u/Sriragul76/",
    hackerrank: "https://www.hackerrank.com/profile/sriragul_aa",
    hackerearth: "https://www.hackerearth.com/@sriragul.aa",
    codechef: "https://www.codechef.com/users/sriragul76",
    resume: "/resume.pdf",
  },
};

// These words rotate under your name in the hero section.
export const roles = ["MERN Stack Engineer", "Backend Developer", "Product-Focused Coder", "DSA Enthusiast"];

// Main About section paragraph.
export const about =
  "An ECE student strongly transitioning into software development with a deep focus on backend engineering and MERN-stack product development. I enjoy solving complex problems, designing scalable APIs, and building systems that are maintainable in real-world teams. My growth is driven by product thinking, clean code practices, and a long-term interest in distributed backend architecture.";

// Skill cards. Use an icon name already imported in App.jsx.
export const skills = {
  programmingLanguages: [
    { name: "Java", icon: "FaJava" },
    { name: "C", icon: "SiC" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Python", icon: "FaPython" },
    { name: "SQL", icon: "FaDatabase" },
  ],
  frameworksTechnologies: [
    { name: "React.js", icon: "FaReact" },
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "JWT Authentication", icon: "SiJsonwebtokens" },
    { name: "REST APIs", icon: "TbApi" },
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Basic AWS Concepts", icon: "FaAws" },
    { name: "Deployment Workflows", icon: "TbCloudUpload" },
  ],
  coreProblemSolving: [
    { name: "Data Structures and Algorithms", icon: "TbBinaryTree2" },
    { name: "Recursion", icon: "TbRepeat" },
    { name: "Dynamic Programming", icon: "TbRouteAltLeft" },
    { name: "Trees", icon: "TbBinaryTree" },
    { name: "Backtracking", icon: "TbArrowBackUp" },
    { name: "OOP", icon: "TbBoxMultiple" },
    { name: "DBMS", icon: "FaDatabase" },
    { name: "Operating Systems", icon: "TbCpu" },
    { name: "System Design Basics", icon: "TbTopologyStar3" },
  ],
  currentlyLearning: [
    { name: "Artificial Intelligence", icon: "TbBrain" },
    { name: "Cloud Computing", icon: "TbCloudComputing" },
    { name: "AWS", icon: "FaAws" },
    { name: "Scalable Backend Systems", icon: "TbServerCog" },
    { name: "Advanced System Design", icon: "TbHierarchy3" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Next.js", icon: "SiNextdotjs" },
  ],
};

// Project cards. Add a new object to show a new project. Remove an object to hide that project.
export const projects = [
  {
    title: "Talent Optimization Platform",
    description:
      "A full MERN platform with readiness engine, role-based employability scoring, skill-gap intelligence, and data-driven recommendations for candidates.",
    features: ["Skill Gap Analysis", "Employer Search", "Real-time Filtering", "Recommendation Engine"],
    stack: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    github: "",
    live: "https://mern-talent-optimization-platform.vercel.app/",
  },
  {
    title: "MERN Stack E-Commerce Platform",
    description:
      "Production-style commerce system with secure JWT auth, Stripe checkout flow, coupon handling, and scalable backend APIs for order lifecycle.",
    features: ["JWT Auth", "Stripe Payments", "Coupon Validation", "Order Management"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "",
    live: "https://verde-modern-commerce.vercel.app/",
  },
  
];

export const achievements = [
  "Finalist in NEO NEXUS 36.0 National Level Hackathon",
  "Solved 550+ Problems on LeetCode",
  "Google Gemini API Competition Participant",
  "Code Circle Club Member",
  "MATLAB Onramp Completed",
];

export const certifications = [
  { name: "MATLAB Onramp", issuer: "MathWorks", date: "Completed" },
  { name: "Full Stack Development Coursework", issuer: "Self-Driven + Practice Projects", date: "Ongoing" },
  { name: "Problem Solving Practice Milestone", issuer: "LeetCode", date: "550+ Problems" },
];

export const spokenLanguages = ["English", "Tamil"];

export const siteContent = {
  navigation: [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "languages", label: "Languages" },
    { id: "contact", label: "Contact" },
  ],
  brand: "PORTFOLIO",
  hero: {
    resumeButton: "Download Resume",
    contactButton: "Contact Me",
    githubButton: "GitHub",
    linkedinButton: "LinkedIn",
  },
  aboutDetails: [
    { label: "INSTITUTION", valueKey: "institution" },
    { label: "COLLEGE EMAIL", valueKey: "collegeEmail" },
    { label: "CONTACT", valueKey: "phone" },
  ],
  sections: {
    about: {
      eyebrow: "ABOUT",
      title: "Engineering with depth",
    },
    skills: {
      eyebrow: "SKILLS",
      title: "Technical capability architecture",
      subtitle:
        "A broader breakdown of the tools, engineering foundations, and learning directions shaping my full-stack developer profile.",
    },
    projects: {
      eyebrow: "PROJECTS",
      title: "Flagship builds and engineering execution",
    },
    achievements: {
      eyebrow: "ACHIEVEMENTS",
      title: "Proof of consistency and performance",
    },
    certifications: {
      eyebrow: "CERTIFICATIONS",
      title: "Professional credentials",
    },
    languages: {
      eyebrow: "COMMUNICATION",
      title: "Languages I Speak",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let us build something exceptional together",
    },
  },
  skillGroups: [
    { heading: "Programming Languages", dataKey: "programmingLanguages" },
    { heading: "Frameworks & Technologies", dataKey: "frameworksTechnologies" },
    { heading: "Core Problem Solving", dataKey: "coreProblemSolving" },
    { heading: "Currently Learning", dataKey: "currentlyLearning" },
  ],
  socialProfiles: [
    { label: "GitHub", linkKey: "github" },
    { label: "LinkedIn", linkKey: "linkedin" },
    { label: "LeetCode", linkKey: "leetcode" },
    { label: "HackerRank", linkKey: "hackerrank" },
    { label: "HackerEarth", linkKey: "hackerearth" },
    { label: "CodeChef", linkKey: "codechef" },
  ],
  projectActions: {
    github: "GitHub",
    live: "Live Demo",
  },
  contactForm: {
    subjectPrefix: "New portfolio message for",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    submitButton: "Send Message",
  },
  footer: {
    prefix: "©",
    suffix: "Crafted with React, Tailwind, Framer Motion",
  },
};
