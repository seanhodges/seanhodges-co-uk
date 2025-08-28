export const profile = {
  name: "Sean Hodges",
  title: "Software Engineer",
  socials: {
    linkedin: "https://www.linkedin.com/in/sean-hodges/",
    github: "https://github.com/sean-hodges",
  },
};

export const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SASS"],
  frameworks: ["Vue.js", "Node.js", "React", "Express.js"],
  tools: ["Git", "Docker", "Vite", "Webpack", "Figma"],
  platforms: ["Netlify", "Vercel", "AWS (S3, Lambda)"],
};

export const experience = [
  {
    role: "Lead Software Engineer",
    company: "Tech Solutions Inc.",
    dates: "2022 - Present",
    duties: [
      "Led a team of 5 frontend developers in the creation of a new enterprise design system.",
      "Architected and implemented scalable state management solutions using Pinia.",
      "Mentored junior engineers, conducted code reviews, and established team-wide best practices.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Innovate Corp.",
    dates: "2019 - 2022",
    duties: [
      "Developed and maintained core features for a high-traffic e-commerce platform.",
      "Collaborated with UI/UX designers to translate mockups into responsive web components.",
      "Improved application performance, reducing initial load time by 30%.",
    ],
  },
];

export const projects = [
  {
    title: "Enterprise Design System",
    image: "https://via.placeholder.com/800x600.png/cc0000/ffffff?text=Project+One",
    challenge: "To unify the user interface across three separate product lines, reducing code duplication and accelerating development.",
    role: "As the technical lead, I architected the component library, established documentation standards, and mentored the team.",
    outcome: "Reduced component duplication by 70% and decreased time-to-market for new features by 40%.",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "E-commerce Platform Revamp",
    image: "https://via.placeholder.com/800x600.png/333333/ffffff?text=Project+Two",
    challenge: "The existing platform was slow and had a poor mobile user experience, leading to high cart abandonment rates.",
    role: "I led the frontend migration to a modern Vue.js SPA, focusing on performance and responsive design.",
    outcome: "Improved Core Web Vitals scores by 50% and increased mobile conversion rates by 25%.",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const interests = [
  { 
    name: "Sailing", 
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>` 
  },
  { 
    name: "Retro Gaming", 
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
    </svg>` 
  },
  { 
    name: "Home Automation", 
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21l3-9 3 9M5 21h14M12 3l2 6-2 6-2-6 2-6z"></path>
    </svg>` 
  },
];