import { mkdir, writeFile } from "node:fs/promises";

const resume = {
  name: "SRI RAGUL A A",
  title: "Full Stack Developer | Problem Solver | Software Engineer",
  email: "sriragul.aa@gmail.com",
  collegeEmail: "sriragul.ec23@bitsathy.ac.in",
  phone: "+91 63820 99700",
  institution: "Bannari Amman Institute of Technology",
  summary:
    "Full-stack developer with a backend-first mindset, focused on clean APIs, MERN-stack products, problem solving, and maintainable engineering systems.",
  links: [
    "GitHub: https://github.com/Sriragul-7/",
    "LinkedIn: https://www.linkedin.com/in/sri-ragul-a-a-245172330/",
    "LeetCode: https://leetcode.com/u/Sriragul76/",
  ],
  skills: [
    "Languages: Java, C, JavaScript, Python, SQL",
    "Frontend: React.js, Tailwind CSS",
    "Backend: Node.js, Express.js, REST APIs, JWT Authentication",
    "Database and Tools: MongoDB, Git, GitHub, Postman",
    "Core: DSA, OOP, DBMS, Operating Systems, System Design Basics",
  ],
  projects: [
    "Talent Optimization Platform - MERN platform with readiness scoring, skill-gap intelligence, filtering, and recommendations.",
    "MERN Stack E-Commerce Platform - Commerce system with JWT auth, Stripe checkout, coupon handling, and order APIs.",
    "Line Follower Robot - Embedded system using Arduino, motor control, IR sensor calibration, and custom PCB work.",
    "Thermal Fault Detection Project - Raspberry Pi and sensor-based thermal monitoring with real-time hardware display.",
  ],
  achievements: [
    "Finalist in NEO NEXUS 36.0 National Level Hackathon",
    "Solved 550+ problems on LeetCode",
    "Google Gemini API Competition Participant",
    "Code Circle Club Member",
    "MATLAB Onramp Completed",
  ],
};

const escapePdf = (value) => String(value).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");

const wrapText = (text, maxChars = 88) => {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) lines.push(line);
  return lines;
};

const textOps = [];
let y = 780;

const addText = (text, x = 50, size = 10, leading = 15) => {
  textOps.push(`BT /F1 ${size} Tf ${x} ${y} Td (${escapePdf(text)}) Tj ET`);
  y -= leading;
};

const addHeading = (text) => {
  y -= 8;
  addText(text.toUpperCase(), 50, 12, 18);
};

const addParagraph = (text) => {
  for (const line of wrapText(text)) addText(line, 50, 10, 14);
};

addText(resume.name, 50, 24, 28);
addText(resume.title, 50, 12, 18);
addText(`${resume.email} | ${resume.collegeEmail} | ${resume.phone}`, 50, 9, 13);
addText(resume.institution, 50, 9, 16);

addHeading("Summary");
addParagraph(resume.summary);

addHeading("Links");
resume.links.forEach((item) => addParagraph(`- ${item}`));

addHeading("Skills");
resume.skills.forEach((item) => addParagraph(`- ${item}`));

addHeading("Projects");
resume.projects.forEach((item) => addParagraph(`- ${item}`));

addHeading("Achievements");
resume.achievements.forEach((item) => addParagraph(`- ${item}`));

const stream = textOps.join("\n");
const objects = [
  "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
  "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
  "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
  "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  `5 0 obj << /Length ${Buffer.byteLength(stream)} >> stream\n${stream}\nendstream endobj`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${object}\n`;
}

const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

await mkdir("public", { recursive: true });
await writeFile("public/resume.pdf", pdf, "binary");
