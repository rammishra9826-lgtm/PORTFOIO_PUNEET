export const P = {
  name: "Puneet Mishra", email: "rammishra9826@gmail.com", phone: "+91 9340994977", location: "Bhopal, India",
  github: "https://github.com/rammishra9826-lgtm", linkedin: "https://www.linkedin.com/in/puneet-mishra21/",
  instagram: "https://instagram.com/Biker_bandaa", resume: "/resume.pdf", photo: "/puneet-hero.png",
  about1: "I'm an AI Engineer and Data Analyst pursuing a B.Tech in Computer Science (Data Science). I work with SQL (PostgreSQL), Python, Excel, Power BI and IBM Cognos, and I build responsive React and Next.js interfaces.",
  about2: "I like bringing analytics, AI tools and product thinking together: cleaning messy data, turning it into dashboards people can act on, and designing interfaces that feel smooth to use. Always curious to learn, build and share knowledge.",
};
export const ticker = ["AI Engineering", "Data Analytics", "SQL", "Power BI", "React", "Next.js", "UI / UX", "Python"];
export const experience = [
  { period: "Present", role: "UI/UX Designer & Developer", org: "easeDaily · Bhopal", text: "Designing and developing web and mobile interfaces for a water-jar delivery platform: landing page, user dashboard and distributor console, built in React, React Native (Expo) and framer-motion." },
  { period: "Present", role: "Web Developer & UI Designer (Freelance)", org: "Discover Himalayas · Manali", text: "Redeveloping and redesigning the motorcycle tour website to improve its interface and user experience." },
  { period: "Internship", role: "Junior Data Analyst Intern (Remote)", org: "Vigrous IT Solutions · Jaipur", text: "Analysed and cleaned data with SQL and Excel, built dashboards in Power BI and IBM Cognos, validated data and supported decisions with actionable insights." },
  { period: "2023 – 2027", role: "B.Tech, CSE (Data Science)", org: "Oriental Institute of Science & Technology · Bhopal", text: "CGPA 7. Currently in the 6th semester." },
  { period: "Schooling", role: "Class X & XII (CBSE)", org: "Bonnie Foi School · Bhopal", text: "Class XII with Physics, Chemistry, Maths and Computer Science." },
];
export const projects = [
  { n: "01", title: "easeDaily", desc: "Water-jar delivery platform with a landing page, user dashboard and distributor console on web and mobile.", tags: ["React", "React Native", "Framer Motion"], href: "https://easedaily.online", tone: "bg-violet text-white" },
  { n: "02", title: "Discover Himalayas", desc: "Freelance redesign and rebuild of a motorcycle tour website with a modern, interactive UI.", tags: ["React", "Tailwind", "UI/UX"], href: "https://discoverhimalayasfinal.vercel.app", tone: "bg-ink text-cream" },
] as { n: string; title: string; desc: string; tags: string[]; href?: string; tone: string }[];
export const skills: Record<string, string[]> = {
  "Data & Analytics": ["SQL", "PostgreSQL", "Excel", "Power BI", "IBM Cognos", "Metabase", "Data Cleaning", "Data Validation", "Anomaly Detection", "Trend Analysis"],
  Development: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  "AI & Tools": ["AI-assisted Development", "Antigravity IDE", "Git", "GitHub"],
  "Soft Skills": ["Analytical Thinking", "Problem Solving", "Communication", "Attention to Detail", "Teamwork", "Time Management", "Adaptability"],
};